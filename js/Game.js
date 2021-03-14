export default class Game{
	constructor(arg){
		this.World 			= arg.World;
		this.View 			= arg.View;
		this.levels			= arg.levels;
		this.activeKeys 	= new Set();

		this.loop = this.loop.bind(this);
	}

	async init(){
		await this.View.init();

		this.World.setLevel(this.levels[0]);

		document.addEventListener("keydown", ({code}) => {
			event.preventDefault();

			switch(code){
				case "ArrowUp":
				case "ArrowDown":
				case "ArrowLeft":
				case "ArrowRight":
					this.activeKeys.add(code);
			}
		});

		document.addEventListener("keyup", ({code}) => {
			event.preventDefault();

			switch(code){
				case "ArrowUp":
				case "ArrowDown":
				case "ArrowLeft":
				case "ArrowRight":
					this.activeKeys.delete(code);
			}
		});
	}

	start(){
		requestAnimationFrame(this.loop);
	}

	loop(){

		this.World.update(this.activeKeys);
		this.View.update(this.World);

		requestAnimationFrame(this.loop);
	}
}
