class Carousel {
  constructor(carousel) {
		this.carousel = carousel;
		//console.log(this.carousel);
		this.leftBtn = this.carousel.querySelector('.left-button');
		this.rightBtn = this.carousel.querySelector('.right-button');
		this.imgList = this.carousel.querySelectorAll('.carousel-img');
		console.log(this.imgList);

		this.index = 0;
		this.imgList[this.index].style.display="block";

		this.leftBtn.addEventListener("click", () => this.cycleLeft());
    this.rightBtn.addEventListener("click", () => this.cycleRight());
	}
	// methods
	cycleLeft() {
		this.imgList[this.index].style.display = 'none';
		this.index === 0 ? this.index = this.imgList.length - 1 : this.index--;
		this.imgList[this.index].style.display = 'block';
	}

	cycleRight() {
		this.imgList[this.index].style.display = 'none';
		this.index === this.imgList.length - 1 ? this.index = 0 : this.index++;
		this.imgList[this.index].style.display = 'block';
	}
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach( car => new Carousel(car));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


