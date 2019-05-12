var nav = document.querySelector('.main-nav__top-menu');
var toggle = document.querySelector('.main-nav__toggle');
var sitelist = document.querySelector('.site-list');

toggle.addEventListener('click', function() {
	nav.classList.toggle('main-nav__top-menu--opened');
	sitelist.classList.toggle('site-list--opened');
});

$('.slider__list').slick({
	prevArrow: '<button class="reviews-toggle toggle-prev"><svg class="arrow" width="22" height="41"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-left"><svg viewBox="0 0 21.706 41.719" id="icon-arrow-left" width="100%" height="100%"><path d="M2.045,20.859L21.458,1.446c0.331-0.331,0.331-0.867,0-1.198c-0.33-0.331-0.867-0.331-1.197,0L0.248,20.261 c-0.331,0.33-0.331,0.867,0,1.197l20.013,20.013c0.164,0.165,0.382,0.248,0.599,0.248s0.434-0.083,0.599-0.248 c0.331-0.331,0.331-0.867,0-1.198L2.045,20.859z"></path></svg></use></svg></button>',
	nextArrow: '<button class="reviews-toggle toggle-next"><svg class="arrow" width="22" height="41"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-left"><svg viewBox="0 0 21.706 41.719" id="icon-arrow-left" width="100%" height="100%"><path d="M2.045,20.859L21.458,1.446c0.331-0.331,0.331-0.867,0-1.198c-0.33-0.331-0.867-0.331-1.197,0L0.248,20.261 c-0.331,0.33-0.331,0.867,0,1.197l20.013,20.013c0.164,0.165,0.382,0.248,0.599,0.248s0.434-0.083,0.599-0.248 c0.331-0.331,0.331-0.867,0-1.198L2.045,20.859z"></path></svg></use></svg></button>',
	dots:false,
	responsive:[
		{
			breakpoint:'1200',
			settings:{
				arrows: false,
				dots:true,
			}
		}
	],
	adaptiveHeight:true
});