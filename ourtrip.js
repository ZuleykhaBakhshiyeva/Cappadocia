//slider-2(our-trip)
var slider_img2 = document.querySelector('.slider-img2');
var ourtrip = ['Rectangle 22.png', 'слайдер 2  картинка 2.png', 'слайдер 2  картинка 3.png'];
var j = 0;

function prev1(){
	if(j <= 0) j = ourtrip.length;	
	j--;
	return setImg2();			 
}

function next1(){
	if(j >= ourtrip.length-1) j = -1;
	j++;
	return setImg2();			 
}

function setImg2(){
	return slider_img2.setAttribute('src', "ourtrip/"+ourtrip[j]);
}
