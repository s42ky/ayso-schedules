var app = {
	currentView: null,
	regions: Array("49", "105", "208", "253", "491"),
	divisions: Array("U6", "U8", "U10", "U12", "U14", "U19"),
	
	reset: function() {
		console.log("RESET called. Forcing full data download.");
        window.localStorage.removeItem("init");
	},
	
	initPage: null,
	firstRoute: true,
	
	formsInit: function() {
		//Regions filter
		for(var reg in this.regions) {
			$('.region-select ul').append("<li><a>"+this.regions[reg]+"</a></li>");
		}
		
		//Divisions filter
		for(var i=0; i<4 && i<this.divisions.length; ++i)
			$('.divis-select1 ul').append("<li><a>"+this.divisions[i]+"</a></li>");
		if(this.divisions.length<7)
			$('.divis-select2 ul').append("<li>&nbsp;</li>");
		for(var i=4; i<this.divisions.length; ++i)
			$('.divis-select2 ul').append("<li><a>"+this.divisions[i]+"</a></li>");
		for(var i=this.divisions.length; i<7; ++i)
			$('.divis-select2 ul').append("<li>&nbsp;</li>");
	},
	
	addListeners: function() {
		//TeamView
		$('#team .divis-select1 a').click(TeamView.divisionUpdate);
		$('#team .divis-select2 a').click(TeamView.divisionUpdate);
		$('#team .gender-select a').click(TeamView.genderUpdate);
		$('#team .region-select a').click(TeamView.regionUpdate);
		
		//Setup
		$("#setup :radio").change(DataControl.setupButtonControl);
		$("#setup-status p").change(DataControl.setupButtonControl);
		$("#setup-finish").click(DataControl.setupButtonClick);
		$("#setup-finish").prop("disabled", true);
	},
	
	addRoutingHook: function() {
		//jQueryMobile hooking
        $(document).bind( "pagebeforechange", function( e, data ) {
        	console.log("Running pagebeforechange");
        	if(app.firstRoute) {
        		//First run -- we want to call route
        		console.log("Interceptiong first routing call");
        		app.firstRoute = false;
        		app.route(null);
        		e.preventDefault();
        	}
        	
        	if(typeof data.toPage === "string" ) {
        		var u = $.mobile.path.parseUrl( data.toPage );

        		if ( u.hash.search(app.processableURL) !== -1 ) {
        			data.options.dataUrl = u.href;
        			
        			app.route(u, data.options);

        			// Kill jQueryMobile's auto-processing
        			e.preventDefault();
        		} else console.log("URL["+u.href+"] is not processable");
        	}
        });
	},
	
    initialize: function() {
    	console.log("Initializing App");
    	
        this.db = new WebSqlStore();
        this.data = DataControl;
        
        //Uncomment to force full data update
        this.reset();
        
        console.log("Setup page headers");
        $('.page').prepend($("#site-header").html());
        
        console.log("Populating filters");
        this.formsInit();
        
        console.log("Registering events");
        this.addListeners();
        this.addRoutingHook();
        
        //Determine page to go to
        if(this.data.isAppSetup()) {
        	this.data.updateData();
        	this.initPage = "index";
        } else {
        	console.log("Routing to first run setup");
        	this.initPage = "setup";
        	$( document ).delegate("#setup", "pageinit", function() {
        		DataControl.downloadInitialData();
    		});
        }
    },
    
	indexURL:  /^#([\w\-_]+)$/,
	detailsURL: /^#([\w\-_]+)[\/\?]([\w\-_%]*)$/,
	
	//Combination of above two for jQuery hook
	processableURL: /^#[\w\-_]+([\/\?][\w\-_%]*)?$/,
	
    route: function(urlObject, options) {
    	console.log("Running route function");
    	var hash;
    	if(urlObject == null)
    		hash = this.initPage;
    	else
    		hash = urlObject.hash;
        
    	if( hash == "setup" ) {
    		var $page = $( "#setup" );
    		$page.page();
    		$.mobile.changePage( $page );
    		return;
    	}
    	
        if (!hash || hash == "index" || hash == "") {
            HomeView.printView();
            return;
        }
        
        var isIndex = null;
        var filterType = null;
        var offset = null;
        //Check for index matching
        var match = hash.match(app.indexURL);
        if (match) {
            isIndex = true;
            filterType = match[1];
        } else {
        	
	    	match = hash.match(app.detailsURL);
	    	if(match) {
	    		isIndex = false;
	    		filterType = match[1];
	    		offset = match[2];
	    	} else {
	    		console.log("Error: unexpected hash pattern.");
	    		HomeView.printView();
	    		return;
	    	}
	    	
        }
    	
    	switch(filterType) {
	        case WeekView.type:
	        	if(isIndex) WeekView.showIndex();
	        		else WeekView.showDetail(offset);
	        	break;
	        /*	
	        case FieldView.type:
	        	if(isIndex) FieldView.showIndex();
	        		else FieldView.showDetail(offset);
	        	break;
	        //*/	
	        case TeamView.type:
	        	if(isIndex) TeamView.showIndex();
	        		else TeamView.showDetail(offset);
	        	break;
	       
	        case GameView.type:
	        	if(isIndex) GameView.showIndex();
        			else GameView.showDetail(offset);
	        	break;
	        	
	        default:
	        	console.log("Error: unexpected page type.");
	        	HomeView.printView();
	        	break;
        }
        return;
    }
};

app.initialize();