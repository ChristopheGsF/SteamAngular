import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { GameListService } from './game/game-list.service';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { PGameComponent } from './p-game/p-game.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SteamComponent } from './steam/steam.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PGameComponent,
    NavBarComponent,
    FooterComponent,
    SteamComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [GameListService],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
