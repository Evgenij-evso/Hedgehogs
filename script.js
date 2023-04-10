let CourseBut = document.querySelector('.C')
let ReviewsBut = document.querySelector('.R')
let FAQBut = document.querySelector('.F')

let AnchorCourse  = document.querySelector('.BlueContainerBody')
let AnchorReviews  = document.querySelector('.GLDivReviews')
let AnchorFAQ = document.querySelector('.GlFAQContainer')

let ButSert = document.querySelector('.ButSert')
let inpN = document.querySelector('.name')
let inpP = document.querySelector('.phone')
let inpE = document.querySelector('.email')

CourseBut.addEventListener('click',function(){
    AnchorCourse.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
ReviewsBut.addEventListener('click',function(){
    AnchorReviews.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}) 
FAQBut.addEventListener('click',function(){
    AnchorFAQ.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
}) 

function sliderUp(){
    console.log('startFile')
    anime({
        targets: '.SliderUp',
        translateY: '-10vh',
        opacity: 1,
        direction: 'alternate',
        duration: 1000
    })
}

let ftP = false
let ftN = false
let ftE = false
setInterval(function(){
    if  (inpP.value != ''){
        inpP.style.border = '1px solid black'
        ftP = true
    }
    else{
        inpP.style.border = '1px solid red'
        ftP = false
    }
    if (inpN.value != ''){
        inpN.style.border = '1px solid black'
        ftN = true
    }
    else{
        inpN.style.border = '1px solid red'
        ftN = false
    }
    if  (inpE.value != ''){
        inpE.style.border = '1px solid black'
        ftE = true
    }
    else{
        inpE.style.border = '1px solid red'
        ftE = false
    }
    if (ftN == true && ftP == true && ftE == true){
        ButSert.style.opacity = 1
        ButSert.disabled = false;
    }
    else{
        ButSert.style.opacity = 0.7
        ButSert.disabled = true;
    }
},100)

jQuery(function($){
	$("input[name=phone]").inputmask("+7 (999) 999-99-99");
	
	$("form").on("submit", function (e) {
	    if(ftN == true && ftP == true && ftE == true){
	        e.preventDefault();
    		var a = new FormData(this);
    		$.ajax({
    			url: "mail.php",
    			type: "POST",
    			data: a,
    			processData: !1,
    			contentType: !1,
    			beforeSend: function () {
    				sliderUp()
    			}
    		}).done(function () {});
	    }
	});
});