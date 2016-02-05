import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from "angular2/router";
import {TeamsDAO, Team, Region, Division} from '../dao/teams.interface';
import {NgFor} from 'angular2/common';
import REGIONS from '../cfg/regions';
import GENDERS from '../cfg/gender';
import AGES from '../cfg/ages';
import {Inject} from 'angular2/core';

@Component({
    directives: [NgFor],
    template: `
    <div id="team" data-role="page" class="page">
        <div class="ui-bar ui-bar-d">Filter Teams</div>
        <div class="filters region-select" data-role="navbar">
            <ul>
            </ul>
        </div>

        <div class="filters divis-select1" data-role="navbar">
            <ul></ul>
        </div>

        <div class="filters divis-select2" data-role="navbar">
            <ul></ul>
        </div>

        <div class="filters gender-select" data-role="navbar">
            <ul>
                <li class="Boys"><a>Boys</a></li>
                <li class="Girls"><a>Girls</a></li>
                <li class="Coed"><a>Coed</a></li>
            </ul>
        </div>

        <div class="ui-bar ui-bar-d">Select Team</div>
        <div class="grid-b results">
            <ul data-role="listview" class="ui-block-a" data-inset="true"></ul>
            <ul data-role="listview" class="ui-block-b" data-inset="true"></ul>
            <ul data-role="listview" class="ui-block-c" data-inset="true"></ul>
        </div>
    </div>
    `
})
//TODO: Enumerate selectors (as form)
//TODO: Redo results (as links)
class TeamSelectView implements OnInit {
    public teams: Team[];

    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        @Inject(TeamsDAO)
        private _dao:TeamsDAO
    ) {}

    ngOnInit() {}
}

export { TeamSelectView as default, TeamSelectView };
