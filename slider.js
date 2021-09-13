const img = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];
let slider = document.getElementById("slider");
let right = document.getElementById("right");
let left = document.getElementById("left");
let circleElem = document.getElementsByClassName("circle");
right.onclick = function(){rightSlide()};
left.onclick = function(){leftSlide()};
let imgPos = 1;
circle();

for(let i = 0; i < circleElem.length ; i++){
	circleElem[i].onclick = function(){imgPos = i,rightSlide(),circle()};
}

function circle(){
	for(let i = 0 ; i < circleElem.length ; i++){
		circleElem[i].style.backgroundColor = "black";
	}
	circleElem[imgPos-1].style.backgroundColor = "green";
}
function rightSlide(){
	if(imgPos == img.length){
		imgPos = 0;
	}
	imgPos++;
	slider.style.backgroundImage = `url(img/${imgPos}.jpg)`;
	circle();
}
function leftSlide(){
	if(imgPos == 1){
		imgPos = 11;
	}
	imgPos--;
	slider.style.backgroundImage = `url(img/${imgPos}.jpg)`;
	circle();
}

