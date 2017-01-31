import { Component, OnInit } from '@angular/core';
import { GameListService } from '../game/game-list.service';


import { Router } from '@angular/router';
import { routes } from '../app.router';

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.css']
})
export class SteamComponent{
  topGame;

  constructor(public _GameListService: GameListService, private router: Router) {
    this.topGame = this._GameListService.getGame.slice(0, 3);
  }
  redirect(gGame) {
      this.router.navigate(['./game-profil', gGame.name]);
    }
}
