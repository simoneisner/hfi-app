import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerService } from './services/player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
