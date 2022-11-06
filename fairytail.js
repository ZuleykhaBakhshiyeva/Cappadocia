//slider-1(fairy-tail)
var slider_img = document.querySelector('.slider-img');
var photo = ['Rectangle 19.jpg', 'слайдер 1  картинка 2.png', 'слайдер 1  картинка 3.png'];
var i = 0;

function prev(){
	if(i <= 0) i = photo.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= photo.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "photo/"+photo[i]);
}

