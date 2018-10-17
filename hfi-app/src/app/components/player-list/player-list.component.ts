import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  pageTitle: string = "Player List!";
  //TODO: strongly type this so that it's an array of type Player
  players: any[] = [
    {
      "nhlPlayer": {
          "person": {
              "id": 8474291,
              "fullName": "Jay Beagle",
              "link": "/api/v1/people/8474291",
              "firstName": "Jay",
              "lastName": "Beagle",
              "primaryNumber": "83",
              "birthDate": "1985-10-16",
              "currentAge": 33,
              "birthCity": "Calgary",
              "birthStateProvince": "AB",
              "birthCountry": "CAN",
              "nationality": "CAN",
              "height": "6' 3\"",
              "weight": 210,
              "active": true,
              "alternateCaptain": false,
              "captain": false,
              "rookie": false,
              "shootsCatches": "R",
              "rosterStatus": "I",
              "currentTeam": {
                  "id": 23,
                  "name": "Vancouver Canucks",
                  "link": "/api/v1/teams/23"
              },
              "primaryPosition": {
                  "code": "C",
                  "name": "Center",
                  "type": "Forward",
                  "abbreviation": "C"
              }
          },
          "jerseyNumber": "83",
          "position": {
              "code": "C",
              "name": "Center",
              "type": "Forward",
              "abbreviation": "C"
          }
      },
      "nhlPlayerStatsContainer": {
          "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2018. All Rights Reserved.",
          "stats": [
              {
                  "type": {
                      "displayName": "statsSingleSeason"
                  },
                  "splits": [
                      {
                          "season": "20172018",
                          "stat": {
                              "timeOnIce": "983:15",
                              "assists": 15,
                              "goals": 7,
                              "pim": 16,
                              "shots": 65,
                              "games": 79,
                              "hits": 69,
                              "powerPlayGoals": 0,
                              "powerPlayPoints": 0,
                              "powerPlayTimeOnIce": "01:58",
                              "evenTimeOnIce": "781:53",
                              "penaltyMinutes": "16",
                              "faceOffPct": 58.51,
                              "shotPct": 10.8,
                              "gameWinningGoals": 2,
                              "overTimeGoals": 0,
                              "shortHandedGoals": 1,
                              "shortHandedPoints": 1,
                              "shortHandedTimeOnIce": "199:24",
                              "blocked": 44,
                              "plusMinus": 3,
                              "points": 22,
                              "shifts": 1421,
                              "timeOnIcePerGame": "12:26",
                              "evenTimeOnIcePerGame": "09:53",
                              "shortHandedTimeOnIcePerGame": "02:31",
                              "powerPlayTimeOnIcePerGame": "00:01"
                          }
                      }
                  ]
              }
          ]
      }
  },
  {
      "nhlPlayer": {
          "person": {
              "id": 8471303,
              "fullName": "Alexander Edler",
              "link": "/api/v1/people/8471303",
              "firstName": "Alexander",
              "lastName": "Edler",
              "primaryNumber": "23",
              "birthDate": "1986-04-21",
              "currentAge": 32,
              "birthCity": "Ostersund",
              "birthStateProvince": null,
              "birthCountry": "SWE",
              "nationality": "SWE",
              "height": "6' 3\"",
              "weight": 212,
              "active": true,
              "alternateCaptain": false,
              "captain": false,
              "rookie": false,
              "shootsCatches": "L",
              "rosterStatus": "Y",
              "currentTeam": {
                  "id": 23,
                  "name": "Vancouver Canucks",
                  "link": "/api/v1/teams/23"
              },
              "primaryPosition": {
                  "code": "D",
                  "name": "Defenseman",
                  "type": "Defenseman",
                  "abbreviation": "D"
              }
          },
          "jerseyNumber": "23",
          "position": {
              "code": "D",
              "name": "Defenseman",
              "type": "Defenseman",
              "abbreviation": "D"
          }
      },
      "nhlPlayerStatsContainer": {
          "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2018. All Rights Reserved.",
          "stats": [
              {
                  "type": {
                      "displayName": "statsSingleSeason"
                  },
                  "splits": [
                      {
                          "season": "20172018",
                          "stat": {
                              "timeOnIce": "1699:25",
                              "assists": 28,
                              "goals": 6,
                              "pim": 68,
                              "shots": 172,
                              "games": 70,
                              "hits": 157,
                              "powerPlayGoals": 1,
                              "powerPlayPoints": 15,
                              "powerPlayTimeOnIce": "197:04",
                              "evenTimeOnIce": "1314:58",
                              "penaltyMinutes": "68",
                              "faceOffPct": 50,
                              "shotPct": 3.5,
                              "gameWinningGoals": 2,
                              "overTimeGoals": 1,
                              "shortHandedGoals": 0,
                              "shortHandedPoints": 0,
                              "shortHandedTimeOnIce": "187:23",
                              "blocked": 203,
                              "plusMinus": -18,
                              "points": 34,
                              "shifts": 1973,
                              "timeOnIcePerGame": "24:16",
                              "evenTimeOnIcePerGame": "18:47",
                              "shortHandedTimeOnIcePerGame": "02:40",
                              "powerPlayTimeOnIcePerGame": "02:48"
                          }
                      }
                  ]
              }
          ]
      }
  },
  {
      "nhlPlayer": {
          "person": {
              "id": 8474593,
              "fullName": "Jacob Markstrom",
              "link": "/api/v1/people/8474593",
              "firstName": "Jacob",
              "lastName": "Markstrom",
              "primaryNumber": "25",
              "birthDate": "1990-01-31",
              "currentAge": 28,
              "birthCity": "Gävle",
              "birthStateProvince": null,
              "birthCountry": "SWE",
              "nationality": "SWE",
              "height": "6' 6\"",
              "weight": 206,
              "active": true,
              "alternateCaptain": false,
              "captain": false,
              "rookie": false,
              "shootsCatches": "L",
              "rosterStatus": "Y",
              "currentTeam": {
                  "id": 23,
                  "name": "Vancouver Canucks",
                  "link": "/api/v1/teams/23"
              },
              "primaryPosition": {
                  "code": "G",
                  "name": "Goalie",
                  "type": "Goalie",
                  "abbreviation": "G"
              }
          },
          "jerseyNumber": "25",
          "position": {
              "code": "G",
              "name": "Goalie",
              "type": "Goalie",
              "abbreviation": "G"
          }
      },
      "nhlPlayerStatsContainer": {
          "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2018. All Rights Reserved.",
          "stats": [
              {
                  "type": {
                      "displayName": "statsSingleSeason"
                  },
                  "splits": [
                      {
                          "season": "20172018",
                          "stat": {
                              "timeOnIce": "3413:43",
                              "assists": 0,
                              "goals": 0,
                              "pim": 0,
                              "shots": 0,
                              "games": 60,
                              "hits": 0,
                              "powerPlayGoals": 0,
                              "powerPlayPoints": 0,
                              "powerPlayTimeOnIce": null,
                              "evenTimeOnIce": null,
                              "penaltyMinutes": null,
                              "faceOffPct": 0,
                              "shotPct": 0,
                              "gameWinningGoals": 0,
                              "overTimeGoals": 0,
                              "shortHandedGoals": 0,
                              "shortHandedPoints": 0,
                              "shortHandedTimeOnIce": null,
                              "blocked": 0,
                              "plusMinus": 0,
                              "points": 0,
                              "shifts": 0,
                              "timeOnIcePerGame": "56:53",
                              "evenTimeOnIcePerGame": null,
                              "shortHandedTimeOnIcePerGame": null,
                              "powerPlayTimeOnIcePerGame": null
                          }
                      }
                  ]
              }
          ]
      }
  },
  {
      "nhlPlayer": {
          "person": {
              "id": 8477967,
              "fullName": "Thatcher Demko",
              "link": "/api/v1/people/8477967",
              "firstName": "Thatcher",
              "lastName": "Demko",
              "primaryNumber": "35",
              "birthDate": "1995-12-08",
              "currentAge": 22,
              "birthCity": "San Diego",
              "birthStateProvince": "CA",
              "birthCountry": "USA",
              "nationality": "USA",
              "height": "6' 4\"",
              "weight": 192,
              "active": true,
              "alternateCaptain": false,
              "captain": false,
              "rookie": true,
              "shootsCatches": "L",
              "rosterStatus": "Y",
              "currentTeam": {
                  "id": 23,
                  "name": "Vancouver Canucks",
                  "link": "/api/v1/teams/23"
              },
              "primaryPosition": {
                  "code": "G",
                  "name": "Goalie",
                  "type": "Goalie",
                  "abbreviation": "G"
              }
          },
          "jerseyNumber": "35",
          "position": {
              "code": "G",
              "name": "Goalie",
              "type": "Goalie",
              "abbreviation": "G"
          }
      },
      "nhlPlayerStatsContainer": {
          "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2018. All Rights Reserved.",
          "stats": [
              {
                  "type": {
                      "displayName": "statsSingleSeason"
                  },
                  "splits": [
                      {
                          "season": "20172018",
                          "stat": {
                              "timeOnIce": "61:21",
                              "assists": 0,
                              "goals": 0,
                              "pim": 0,
                              "shots": 0,
                              "games": 1,
                              "hits": 0,
                              "powerPlayGoals": 0,
                              "powerPlayPoints": 0,
                              "powerPlayTimeOnIce": null,
                              "evenTimeOnIce": null,
                              "penaltyMinutes": null,
                              "faceOffPct": 0,
                              "shotPct": 0,
                              "gameWinningGoals": 0,
                              "overTimeGoals": 0,
                              "shortHandedGoals": 0,
                              "shortHandedPoints": 0,
                              "shortHandedTimeOnIce": null,
                              "blocked": 0,
                              "plusMinus": 0,
                              "points": 0,
                              "shifts": 0,
                              "timeOnIcePerGame": "61:21",
                              "evenTimeOnIcePerGame": null,
                              "shortHandedTimeOnIcePerGame": null,
                              "powerPlayTimeOnIcePerGame": null
                          }
                      }
                  ]
              }
          ]
      }
  }
  ];
}
