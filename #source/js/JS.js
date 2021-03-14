"use strict";

import DOM from './DOM.js';
import Game from './Game.js';
import World from './World.js';
import View from './View.js';
import levels from './levels.js';
import spriteMap from './SpriteMap.js';

import Sprite from "./Sprite.js";

const canv 	= document.querySelector('.canvas');

const game = new Game({
	"World" 	: new World(), 
	"View" 	: new View({"canv" : canv, "sprite" : new Sprite("img/sprite.png")}),
	"levels"	: levels,
});

//console.log(game);

game.init().then(() => game.start());
//game.start();