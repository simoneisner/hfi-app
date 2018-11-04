import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service'
import { IPlayer } from 'src/app/models/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playersArray: IPlayer[];
  pageTitle: string = "Player List!";
  
  constructor(private playerService:PlayerService) { 

  }

  ngOnInit() {
    this.playerService.getJson("assets/players.json").subscribe(players => this.playersArray = players, error=> console.log(error));      
    //this.playerService.getJson("assets/players.json").subscribe(players => this.playersArray = players);      
    //var test = this.playersArray;
  }
}
