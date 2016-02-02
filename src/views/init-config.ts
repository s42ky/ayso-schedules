import {View, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from "angular2/router";

@View({
    template: `
    <div id="setup" data-role="page">
        <img src="img/HomeText.png" alt="AYSO Kansas" />

        <div id="setup-status">
            <p>Initializing setup...</p>
            <div id="progressbar"></div>
        </div>

        <label class="ui-hidden-accessible">Select region</label>
        <select name="select-region" id="init-region">
            <option>Select your region...</option>
            <option value="49">Region 49 (Stryker)</option>
            <option value="105">Region 105 (Southview)</option>
            <option value="208">Region 208 (West Wichita)</option>
            <option value="253">Region 253 (Valley Center)</option>
            <option value="491">Region 491 (Clearwater)</option>
        </select>

        <p>This app covers all divisions <strong>except</strong>:</p>
        <ul>
            <li>Region 105 - U6</li>
            <li>Region 208 - U10, U8 and U6</li>
            <li>Region 253 - U6</li>
            <li>Region 491 - U8 and U6</li>
        </ul>

        <button id="setup-finish">Finish</button>
    </div>
    `
})
//TODO: Figure out how to route here on first load
//TODO: Rework as form and save values
class InitialConfigurationView implements OnInit {
    constructor(
        private _router:Router,
        private _routeParams:RouteParams
    ) {}
    
    ngOnInit() {
    
    }
}

export { InitialConfigurationView as default };