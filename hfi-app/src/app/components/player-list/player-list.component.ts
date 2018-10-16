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
              "id": 8466139,
              "fullName": "Patrick Marleau",
              "link": "/api/v1/people/8466139"
          },
          "jerseyNumber": "12",
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
                              "timeOnIce": "1393:00",
                              "assists": 20,
                              "goals": 27,
                              "pim": 16,
                              "shots": 203,
                              "games": 82,
                              "hits": 85,
                              "powerPlayGoals": 5,
                              "powerPlayPoints": 9,
                              "powerPlayTimeOnIce": "163:15",
                              "evenTimeOnIce": "1197:06",
                              "penaltyMinutes": "16",
                              "faceOffPct": 52.15,
                              "shotPct": 13.3,
                              "gameWinningGoals": 5,
                              "overTimeGoals": 1,
                              "shortHandedGoals": 0,
                              "shortHandedPoints": 0,
                              "shortHandedTimeOnIce": "32:39",
                              "blocked": 26,
                              "plusMinus": 1,
                              "points": 47,
                              "shifts": 1938,
                              "timeOnIcePerGame": "16:59",
                              "evenTimeOnIcePerGame": "14:35",
                              "shortHandedTimeOnIcePerGame": "00:23",
                              "powerPlayTimeOnIcePerGame": "01:59"
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
              "id": 8468493,
              "fullName": "Ron Hainsey",
              "link": "/api/v1/people/8468493"
          },
          "jerseyNumber": "2",
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
                              "timeOnIce": "1749:11",
                              "assists": 19,
                              "goals": 4,
                              "pim": 20,
                              "shots": 73,
                              "games": 80,
                              "hits": 91,
                              "powerPlayGoals": 1,
                              "powerPlayPoints": 1,
                              "powerPlayTimeOnIce": "10:59",
                              "evenTimeOnIce": "1419:43",
                              "penaltyMinutes": "20",
                              "faceOffPct": 0,
                              "shotPct": 5.5,
                              "gameWinningGoals": 2,
                              "overTimeGoals": 0,
                              "shortHandedGoals": 0,
                              "shortHandedPoints": 2,
                              "shortHandedTimeOnIce": "318:29",
                              "blocked": 169,
                              "plusMinus": 12,
                              "points": 23,
                              "shifts": 2215,
                              "timeOnIcePerGame": "21:51",
                              "evenTimeOnIcePerGame": "17:44",
                              "shortHandedTimeOnIcePerGame": "03:58",
                              "powerPlayTimeOnIcePerGame": "00:08"
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
              "id": 8474581,
              "fullName": "Jake Gardiner",
              "link": "/api/v1/people/8474581"
          },
          "jerseyNumber": "51",
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
                              "timeOnIce": "1847:04",
                              "assists": 47,
                              "goals": 5,
                              "pim": 32,
                              "shots": 133,
                              "games": 82,
                              "hits": 51,
                              "powerPlayGoals": 1,
                              "powerPlayPoints": 15,
                              "powerPlayTimeOnIce": "169:43",
                              "evenTimeOnIce": "1646:48",
                              "penaltyMinutes": "32",
                              "faceOffPct": 0,
                              "shotPct": 3.8,
                              "gameWinningGoals": 0,
                              "overTimeGoals": 0,
                              "shortHandedGoals": 0,
                              "shortHandedPoints": 0,
                              "shortHandedTimeOnIce": "30:33",
                              "blocked": 103,
                              "plusMinus": 9,
                              "points": 52,
                              "shifts": 2335,
                              "timeOnIcePerGame": "22:31",
                              "evenTimeOnIcePerGame": "20:04",
                              "shortHandedTimeOnIcePerGame": "00:22",
                              "powerPlayTimeOnIcePerGame": "02:04"
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
              "id": 8474589,
              "fullName": "Tyler Ennis",
              "link": "/api/v1/people/8474589"
          },
          "jerseyNumber": "63",
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
                              "timeOnIce": "874:03",
                              "assists": 14,
                              "goals": 8,
                              "pim": 12,
                              "shots": 115,
                              "games": 73,
                              "hits": 51,
                              "powerPlayGoals": 2,
                              "powerPlayPoints": 3,
                              "powerPlayTimeOnIce": "40:57",
                              "evenTimeOnIce": "832:51",
                              "penaltyMinutes": "12",
                              "faceOffPct": 25,
                              "shotPct": 7,
                              "gameWinningGoals": 3,
                              "overTimeGoals": 0,
                              "shortHandedGoals": 0,
                              "shortHandedPoints": 0,
                              "shortHandedTimeOnIce": "00:15",
                              "blocked": 33,
                              "plusMinus": -1,
                              "points": 22,
                              "shifts": 1115,
                              "timeOnIcePerGame": "11:58",
                              "evenTimeOnIcePerGame": "11:24",
                              "shortHandedTimeOnIcePerGame": "00:00",
                              "powerPlayTimeOnIcePerGame": "00:33"
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
              "id": 8475166,
              "fullName": "John Tavares",
              "link": "/api/v1/people/8475166"
          },
          "jerseyNumber": "91",
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
                              "timeOnIce": "1633:52",
                              "assists": 47,
                              "goals": 37,
                              "pim": 26,
                              "shots": 257,
                              "games": 82,
                              "hits": 30,
                              "powerPlayGoals": 12,
                              "powerPlayPoints": 30,
                              "powerPlayTimeOnIce": "259:24",
                              "evenTimeOnIce": "1246:35",
                              "penaltyMinutes": "26",
                              "faceOffPct": 52.89,
                              "shotPct": 14.4,
                              "gameWinningGoals": 3,
                              "overTimeGoals": 2,
                              "shortHandedGoals": 2,
                              "shortHandedPoints": 3,
                              "shortHandedTimeOnIce": "127:53",
                              "blocked": 34,
                              "plusMinus": -12,
                              "points": 84,
                              "shifts": 1895,
                              "timeOnIcePerGame": "19:55",
                              "evenTimeOnIcePerGame": "15:12",
                              "shortHandedTimeOnIcePerGame": "01:33",
                              "powerPlayTimeOnIcePerGame": "03:09"
                          }
                      }
                  ]
              }
          ]
      }
  }
  ];
}
