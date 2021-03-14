export default class Tank{
	constructor(){
		this.direction 		= 0;
		this.x 					= 0;
		this.y 					= 0;
		this.size 				= 16;
		this.animationFrame 	= 0;
		this.frames			= [
			[0 * this.size, 0 * this.size, this.size, this.size],
			[1 * this.size, 0 * this.size, this.size, this.size],
			[6 * this.size, 0 * this.size, this.size, this.size],
			[7 * this.size, 0 * this.size, this.size, this.size],
			[4 * this.size, 0 * this.size, this.size, this.size],
			[5 * this.size, 0 * this.size, this.size, this.size],
			[2 * this.size, 0 * this.size, this.size, this.size],
			[3 * this.size, 0 * this.size, this.size, this.size]
		]; 
	}

	get Sprite(){
		return this.frames[this.direction * 2 + this.animationFrame];
	}

	get X(){
		return this.x;
	}

	set X(value){
		this.x = value;
	}

	get Y(){
		return this.y;
	}

	set Y(value){
		this.y = value;
	}

	get Size(){
		return this.size;
	}

	update(activeKeys){
		if(activeKeys.has("ArrowUp"))
			this.#move(0, "Y", -1);
		else if(activeKeys.has("ArrowDown"))
			this.#move(2, "Y", 1);
		else if(activeKeys.has("ArrowLeft"))
			this.#move(3, "X", -1);
		else if(activeKeys.has("ArrowRight"))
			this.#move(1, "X", 1);
	}

	#move(direction, axis, value){
		this[axis] += value;
		this.direction = direction;
		this.animationFrame ^= 1;
	}
}
