import './style.scss';

console.log('javascript index file loaded');


var heroImage = document.querySelector('.hero-image');
var header = document.querySelector('header.header-wrapper');

function init() {
	createIntersectionObserver(heroImage);
}


//hoisted upwards
var whenIntersecting = (entries) =>{
	entries.forEach(entry => {
		// entry.isIntersecting == true ? this.sticky = false : this.sticky=true;
		console.log(heroImage);
		if(entry.isIntersecting == true) {
			console.log('NOT STICKY ANYMORE');
			// this.sticky = false;
			header.classList.remove('sticky');
		} else if(entry.isIntersecting == false) {
			console.log('IS NOW STICKY');
			header.classList.add('sticky');
			// this.sticky = true;
		}
	});
};

//hoisted upwards

function createIntersectionObserver(thingToObserve) {
	var headerIntersectObserver = new IntersectionObserver(whenIntersecting, {threshold: 1});
	headerIntersectObserver.observe(thingToObserve);
}


init();

