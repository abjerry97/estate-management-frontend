
import React, { useEffect, useRef } from 'react'
// import "./SliderBtn.css"
 
function SliderBtn() {
	 
var initialMouse = 0;
var slideMovementTotal = 0;
var mouseIsDown = false; 
const sliderRef = useRef(null)
const buttonBackgroundRef = useRef(null)
const slideTextRef = useRef(null)
const lockerRef = useRef(null)
var  slider = sliderRef.current
var buttonBackground = buttonBackgroundRef.current
var slideText = slideTextRef.current
var locker = lockerRef.current

function mousedown (event){
	mouseIsDown = true;
	slideMovementTotal = buttonBackground.clientWidth - slider.clientWidth + 10;
	initialMouse = event.clientX || event.touches[0].pageX;
	console.log(initialMouse)
}


  function mouseup  (event) {
	
	console.log(1234345)
	if (!mouseIsDown)
		return;
	mouseIsDown = false;
	var currentMouse = event.clientX || event.changedTouches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;

	if (relativeMouse < slideMovementTotal) {
		// slideText.fadeTo(300, 1);
		slider.animate({
			left: "-10px"
		}, 300);
		return;
	}
	slider.addClass('unlocked');
	locker.text('lock_outline');
	setTimeout(function(){
		slider.on('click tap', function(event){
			if (!slider.hasClass('unlocked'))
				return;
			slider.removeClass('unlocked');
			locker.text('lock_open');
			slider.off('click tap');
		});
	}, 0);

	console.log(1234)
}



document.body.addEventListener('mousemove touchmove', function(event){
	if (!mouseIsDown)
		return;

	var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;
	var slidePercent = 1 - (relativeMouse / slideMovementTotal);
	
	//  slideText.fadeTo(0, slidePercent);

	if (relativeMouse <= 0) {
		slider.css({'left': '-10px'});
		return;
	}
	if (relativeMouse >= slideMovementTotal + 10) {
		slider.css({'left': slideMovementTotal + 'px'});
		return;
	}
	slider.css({'left': relativeMouse - 10});
} )








useEffect(() => {  


}, []) 



  return (
	<div id="button-background" ref={buttonBackgroundRef} >
	<span class="slide-text" ref={slideText} >Swipe</span>
	<div id="slider" ref={sliderRef} onMouseDown={(e)=>mousedown(e)} onTouchStart={(e)=>mousedown(e)} >
		<i id="locker" class="material-icons" onMouseUp={(e)=>mouseup(e)}>lock_open</i>
	</div>
</div>

  )
}

export default SliderBtn














// var initialMouse = 0;
// var slideMovementTotal = 0;
// var mouseIsDown = false;
// var slider = $('#slider');

// slider.on('mousedown touchstart', function(event){
// 	mouseIsDown = true;
// 	slideMovementTotal = $('#button-background').width() - $(this).width() + 10;
// 	initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
// });

// $(document.body, '#slider').on('mouseup touchend', function (event) {
// 	if (!mouseIsDown)
// 		return;
// 	mouseIsDown = false;
// 	var currentMouse = event.clientX || event.changedTouches[0].pageX;
// 	var relativeMouse = currentMouse - initialMouse;

// 	if (relativeMouse < slideMovementTotal) {
// 		$('.slide-text').fadeTo(300, 1);
// 		slider.animate({
// 			left: "-10px"
// 		}, 300);
// 		return;
// 	}
// 	slider.addClass('unlocked');
// 	$('#locker').text('lock_outline');
// 	setTimeout(function(){
// 		slider.on('click tap', function(event){
// 			if (!slider.hasClass('unlocked'))
// 				return;
// 			slider.removeClass('unlocked');
// 			$('#locker').text('lock_open');
// 			slider.off('click tap');
// 		});
// 	}, 0);
// });

// $(document.body).on('mousemove touchmove', function(event){
// 	if (!mouseIsDown)
// 		return;

// 	var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
// 	var relativeMouse = currentMouse - initialMouse;
// 	var slidePercent = 1 - (relativeMouse / slideMovementTotal);
	
// 	$('.slide-text').fadeTo(0, slidePercent);

// 	if (relativeMouse <= 0) {
// 		slider.css({'left': '-10px'});
// 		return;
// 	}
// 	if (relativeMouse >= slideMovementTotal + 10) {
// 		slider.css({'left': slideMovementTotal + 'px'});
// 		return;
// 	}
// 	slider.css({'left': relativeMouse - 10});
// });

















































// import React from 'react'
// import "./SliderBtn.css"

// var initialMouse = 0;
// var slideMovementTotal = 0;
// var mouseIsDown = false;

// function SliderBtn() {
// 	const sliderRef = React.useRef(null)
// 	const buttonBackground = React.useRef(null)
// // console.log(sliderRef)

// function slideronMouseDown(event){
//  console.log(buttonBackground.current.clientWidth) 
// 	mouseIsDown = true;
// 	slideMovementTotal = buttonBackground.current.clientWidth + 10;
// 	console.log(event)
// 	initialMouse = event.clientX || event.touches[0].pageX;

// 	console.log(12344343)}
 
//   	React.useEffect(() => {   

//  const slider = sliderRef.current

 
// 	document.body.addEventListener('mouseup touchend', function (event) {
// 		if (!mouseIsDown)
// 			return;
// 		mouseIsDown = false;
// 		var currentMouse = event.clientX || event.changedTouches[0].pageX;
// 		var relativeMouse = currentMouse - initialMouse;
	
// 		if (relativeMouse < slideMovementTotal) {
// 			document.getElementById('.slide-text').fadeTo(300, 1);
// 			slider.animate({
// 				left: "-10px"
// 			}, 300);
// 			return;
// 		}
// 		slider.addClass('unlocked');
// 		document.getElementById('#locker').text('lock_outline');
// 		setTimeout(function(){
// 			slider.on('click tap', function(event){
// 				if (!slider.hasClass('unlocked'))
// 					return;
// 				slider.removeClass('unlocked');
// 				document.getElementById('#locker').text('lock_open');
// 				slider.off('click tap');
// 			});
// 		}, 0);
// 	});
	
// 	document.body.addEventListener('mousemove touchmove', function(event){
// 		if (!mouseIsDown)
// 			return;
	
// 		var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
// 		var relativeMouse = currentMouse - initialMouse;
// 		var slidePercent = 1 - (relativeMouse / slideMovementTotal);
		
// 		document.getElementById('.slide-text').fadeTo(0, slidePercent);
	
// 		if (relativeMouse <= 0) {
// 			slider.css({'left': '-10px'});
// 			return;
// 		}
// 		if (relativeMouse >= slideMovementTotal + 10) {
// 			slider.css({'left': slideMovementTotal + 'px'});
// 			return;
// 		}
// 		slider.css({'left': relativeMouse - 10});
// 	});
	


 

//   }, [])

	


 

//   return (
// 	<div id="button-background" ref={buttonBackground}>
// 	<span class="slide-text">Swipe</span>
// 	<div id="slider" ref={sliderRef} onMouseDown={(e)=>slideronMouseDown(e)} onTouchStart={(e)=>slideronMouseDown(e)}>
// 		<i id="locker" class="material-icons">lock_open</i>
// 	</div>
// </div>

//   )
// }

// export default SliderBtn