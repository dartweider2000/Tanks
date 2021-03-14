export default class Sprite{
	constructor(src){
		this.src = src;
		this.img = new Image();
	}

	async load(){
		return new Promise((resolve, reject) => {
			this.img.src = this.src;
			this.img.onload = () => resolve();
			this.img.onerror = () => reject(); 
		});
	}
}