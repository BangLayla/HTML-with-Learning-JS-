//selecting landing page element
let landingpage = document.querySelector(".landing-page");

//Get array of images
let imgsArray = ["1.jpeg","2.jpeg","3.jpg","4.jpg","5.jpg"];

setInterval(()=>{
    //Get random number
    let randomNumber = Math.floor(Math.random()*imgsArray.length);
    //Change background image
    landingpage.style.backgroundImage = 'url("Pics/'+imgsArray[randomNumber]+'")';
},7000);