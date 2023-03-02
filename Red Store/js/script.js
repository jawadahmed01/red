var menuitems =document.getElementById('menuitems');

menuitems.style.maxHeight ='0px';
function menutoggle(){
	if (menuitems.style.maxHeight == '0px') {

		menuitems.style.maxHeight ='500px';
	}else{
		menuitems.style.maxHeight ='0px';
	}
}

// Single Product page gallery 

// var productImg = document.getElementById('productImg');
// var smallImg = document.getElementsByClassName('small-img');

// 	smallImg[0].onclick =function () {
// 	productImg.src = smallImg[0].src;
// }

// smallImg[1].onclick =function () 
// {
// 	productImg.src = smallImg[1].src;
// }
// smallImg[2].onclick =function () 
// {
// 	productImg.src = smallImg[2].src;
// }
// smallImg[3].onclick =function () 
// {
// 	productImg.src = smallImg[3].src;
// }

// Account Page Script

var logForm = document.getElementById("logForm");
var regForm = document.getElementById("regForm");
var login = document.getElementById("login");
var register = document.getElementById("register");

function reg() {
	logForm.style.transform = "translateX(0px)";
	regForm.style.transform = "translateX(0px)";
	register.classList.remove("#register");
}
function log() {
	logForm.style.transform = "translateX(300px)";
	regForm.style.transform = "translateX(300px)";
	register.classList.remove("register");
	register.classList.add("login");
}