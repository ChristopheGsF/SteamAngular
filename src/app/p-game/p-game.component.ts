import { Component} from '@angular/core';
import { ActivatedRoute}   from '@angular/router';
import { Router } from '@angular/router';

import { GameListService } from '../game/game-list.service';
import { Game } from '../game/game';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-p-game',
  templateUrl: './p-game.component.html',
  styleUrls: ['./p-game.component.css'],
})
export class PGameComponent{
Game;

  constructor(public _GameListService: GameListService, private route:ActivatedRoute) {
    let gName = this.route.snapshot.url[1].path;
    let lGame = this._GameListService.getGame;
    this.Game = lGame[0];
    for (let i = 0; lGame[i].name != gName; i++)
      this.Game = lGame[i + 1];
  }
  }
