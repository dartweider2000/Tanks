"use strict";

export default class DOM{
	constructor(element){
		this.element = element;
	}

	static create(element){
		return new DOM(document.createElement(element));
	}

	static from(element){
		return new DOM(element);
	}

	toOdinary(){
		return this.element; 
	}

	addClass(clas){
		this.element.classList.add(clas);
		return this;
	}

	style(obj){
		for(let key of Object.keys(obj)){
			this.element.style[key] = obj[key];
		}

		return this;
	}

	before(sibling){
		if(sibling instanceof DOM)
			this.element.before(siblings.e);
		else
			this.element.before(siblings);

		return this;
	}

	after(sibling){
		if(sibling instanceof DOM)
			this.element.after(siblings.e);
		else
			this.element.after(siblings);

		return this;
	}

	append(parent){
		if(parent instanceof DOM)
			this.element.append(parent.e);
		else
			this.element.append(parent);

		return this;
	}

	prepend(parent){
		if(parent instanceof DOM)
			this.element.prepend(parent.e);
		else
			this.element.prepend(parent);

		return this;
	}

	insertBefore(sibling){
		if(sibling instanceof DOM)
			sibling.e.before(this.element);
		else
			sibling.before(this.element);

		return this;
	}

	insertAfter(sibling){
		if(sibling instanceof DOM)
			sibling.e.after(this.element);
		else
			sibling.after(this.element);

		return this;
	}

	appendTo(parent){
		if(parent instanceof DOM)
			parent.e.append(this.element);
		else
			parent.append(this.element);

		return this;
	}

	prependTo(parent){
		if(parent instanceof DOM)
			parent.e.prepend(this.element);
		else
			parent.prepend(this.element);

		return this;
	}

	remove(){
		this.element.remove();
		delete this;
	}

	setAttr(value, value_2){
		if(value_2)
			this.element.setAttribute(value, value_2);
		else
			for(let key of Object.keys(value))
				this.element.setAttribute(key, value[key]);

		return this;
	}

	get rect(){
		return this.element.getBoundingClientRect();
	}

	get e(){
		return this.element;
	}
}