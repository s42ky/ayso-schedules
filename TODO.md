See Github issues for major milestones
Remove items if added as Github issue

DAOs

- [x] Finalize DAO update operation
- [x] Persist lastUpdate in HTTP initializer
- [x] LocalStorage DAOs
    - [x] Settings
    - [x] WeekCache
    - [x] Teams
    - [x] Games
    - [x] Make run update if initialized
- ~~SQL storage DAOs~~
    - ~~Games~~
    - ~~Teams~~

Add pipes

- [x] Name swap (Last, First => First Last)
      ~~Alternatively handle in Coach->Team transform~~
- [x] Format team in 1-team: at/vs/bye
- [x] Add custom DatePipe

TODO:

- [x] default week to current week in WeekView
- [x] Handle last update
- [x] Keep region ID numeric
- [x] Better loading handle
- [x] Have single configuration class
- [ ] re-use angular isBlank() ?
- [x] Make sure service calls are in ngOnInit instead of in the constructor
- [x] Navigate ~~UP~~ (or back?) instead of just to Home
- [ ] Make favorites use different list view (header week/date; time in row)

Backend

- [ ] Adjust backend to use same data models
- [ ] Make sure region is not null on byes

Typing

- [x] Change all Number,String,etc to primitives
- [x] Make sure everything is typed
    - note: done as much as possible for now

Native

- [x] Wait for deviceready event
- [x] Include cordova javascript
- [x] Click vs touch? -- handled by libraries
- [x] Site whitelisting -- google maps, twitter, ayso

Error handling

- [x] Create logging environment
- [x] Add different error types
- [ ] ?Switch to use Angular's parseInt
- [ ] Global error handling display
    - Option to show console messages?
    - Offline info (update) or error (twitter, google, init)
- [ ] Make sure can remove logging in prod (at least some levels)
- [ ] Make handle bad data state

View

- [x] Handle no coach (TBD)
- [x] ~~Show field better; perhaps in config?~~~~
- [ ] Hide region if default in lists

Bugs:

- [ ] If URL to /init already has GET, keep those
- [x] Region filter doesn't work for /teams
- [x] Field/directions don't work for /game/:id
- [x] One team game list needs sort by date/time
