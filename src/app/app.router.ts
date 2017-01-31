import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListService } from './game/game-list.service';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { PGameComponent } from './p-game/p-game.component';
import { SteamComponent } from './steam/steam.component';

export const router: Routes = [
  { path : 'steam',component : SteamComponent },
  { path : 'game-list', component : GameComponent },
  { path : 'game-profil/:name', component : PGameComponent },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
