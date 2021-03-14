import Tank from './Tank.js';

export default class World{
	constructor(){
		this.level = null;
		this.player1Tank = new Tank();
		this.player2Tank = null;
		this.enemyTanks = [];
	}

	setLevel(level){
		this.level = level;
		this.level.map = this.level.map.map((row, y) => {
			return row.map((block, x) => {
				return{
					"x" 		: x * this.level.Size,
					"y" 		: y * this.level.Size,
					"block" 	: block
				}
			});
		});
	}

	update(activeKeys){	
		this.player1Tank.update(activeKeys);
	}
}