export default class View{
	constructor(arg){
		this.canv 	= arg.canv;
		this.cx 		= this.canv.getContext("2d");
		this.sprite = arg.sprite;
		this.parent = this.canv.parentElement;

		this.canv.width = this.parent.offsetWidth;
		this.canv.height = this.parent.offsetHeight;
	}

	async init(){
		await this.sprite.load();
	}

	update(world){
		this.clearScreen();
		this.renderLevel(world.level);
		this.renderTank(world.player1Tank);
	}

	renderTank(tank){
		this.cx.drawImage(
			this.sprite.img,
			...tank.Sprite,
			tank.X, tank.Y, tank.Size, tank.Size
		);
	}

	renderLevel(level){
		for(let row of level.map){
			for(let {x, y, block} of row){
				this.cx.drawImage(
					this.sprite.img,
					...level.getBlock(block),
					x, y, level.Size, level.Size
				);
			}
		}
	}

	clearScreen(){
		this.cx.clearRect(0, 0, this.canv.width, this.canv.height);
	}
} 
