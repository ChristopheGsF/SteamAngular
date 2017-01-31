import { Component} from '@angular/core';
import { GameListService } from './game-list.service';
import { Game } from './game';

import { Router } from '@angular/router';
import { routes } from '../app.router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  inputs: ['Game'],
})

export class GameComponent{
  sGame;
  value;

  constructor(public _GameListService: GameListService, private router: Router) {
    this.sGame = this._GameListService.getGame;
  }

  redirect(gGame) {
      this.router.navigate(['./game-profil', gGame.name]);
    }

    onSubmit(value: string) {
      this.value = value;
      let lGame = this.sGame;
      console.log(this.value);
      console.log(lGame);
      for (let i = 0; lGame[i].name != value; i++)
        this.sGame = lGame[i + 1];
        console.log(this.sGame);
    }

}
