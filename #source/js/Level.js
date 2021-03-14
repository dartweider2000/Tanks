export default class Level{
	constructor(map){
		this.map = map;
		this.size = 16
		this.frames = {
			"0" 	: [21 * this.size + 5, 		0, this.size, this.size], // empty
			"1" 	: [16 * this.size, 			0, this.size, this.size], // full wall
			"2" 	: [17 * this.size, 			0, this.size, this.size], // right wall
			"3" 	: [18 * this.size, 			0, this.size, this.size], // bottom wall
			"4" 	: [19 * this.size, 			0, this.size, this.size], // left wall	
			"5" 	: [20 * this.size, 			0, this.size, this.size], // top wall
			"6" 	: [16 * this.size, this.size, this.size, this.size], // full ferrym
			"7" 	: [17 * this.size, this.size, this.size, this.size], // right ferrym
			"8" 	: [18 * this.size, this.size, this.size, this.size], // bottom ferrym
			"9" 	: [19 * this.size, this.size, this.size, this.size], // left ferrym
			"10" 	: [20 * this.size, this.size, this.size, this.size], // top ferrym
		}
	}

	getBlock(block){
		return this.frames[`${block}`];
	}

	get Size(){
		return this.size;
	}
}