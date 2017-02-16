// Pictures, Rotating Images //
$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotator = 
	{
		init: function()
		{
//Fade-in time
var initialFadeIn = 1000;
			
//Interval Times
var itemInterval = 3000;
			
//Cross Fade Time
var fadeTime = 3000;
			
//Count Number
var numberOfItems = $('.rotating-item').length;

//Current Item Set
var currentItem = 0;

//First Item Shown
$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

//Loop Through		
var infiniteLoop = setInterval(function(){
$('.rotating-item').eq(currentItem).fadeOut(fadeTime);

if(currentItem == numberOfItems -1){
currentItem = 0;
}else{
currentItem++;
}
$('.rotating-item').eq(currentItem).fadeIn(fadeTime);

}, itemInterval);	
}	
};

InfiniteRotator.init();
	
});

// Rotating Media Icons (TBA) Coming soon! //

