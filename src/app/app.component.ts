import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import GameView from "../views/game-detail.ts";
import RegionListView from "../views/region-list.ts";
import FieldMapView from "../views/field-map.ts";
import {HomeView} from "../views/home.ts";
import FavoritesListView from '../views/favorites-list';
import {DivisionListView} from '../views/division-list';
import {DivisionSelectView} from '../views/division-select';
import {CancellationsView} from '../views/cancellations';
import {MapView} from '../views/map';
import {TeamScheduleView} from '../views/team-schedule';
import {WeekScheduleView} from '../views/week-schedule';
import {SchedulesMenuView} from '../views/schedules-menu';


@Component({
    selector: 'ayso-app',
    template: '<p>TEST</p>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/', useAsDefault: true,
        name: 'Home', component: HomeView},
    {path:'/schedules',
        name: 'SchedulesMenu', component: SchedulesMenuView},
    {path:'/favorites',
        name: 'FavoritesSchedule', component: FavoritesListView},
    {path:'/divisions',
        name: 'DivisionSelect', component: DivisionSelectView},
    {path:'/division/:divis/:week',
        name: 'DivisionSchedule', component: DivisionListView},
    {path:'/game/:id',
        name: 'GameDetail', component: GameView},
    {path:'/regions',
        name: 'RegionList', component: RegionListView},
    {path:'/region/:region/field',
        name: 'FieldDetail', component: FieldMapView},
    {path:'/region/:region/map',
        name: 'MapDetail', component: MapView},
    {path:'/region/:region/:division/:divis',
        name: 'XRDivisionSchedule', component: RegionListView},
    {path:'/teams',
        name: 'TeamSelect', component: HomeView},
    {path:'/team/:id',
        name: 'TeamSchedule', component: TeamScheduleView},
    {path:'/week',
        name: 'CurWeekSchedule', component: WeekScheduleView},
    {path:'/week/:num',
        name: 'WeekSchedule', component: WeekScheduleView},
    {path:'/twitter',
        name: 'TwitterView', component: CancellationsView},
    {path:'/settings',
        name: 'Settings', component: HomeView}
])
export class AppComponent { }
