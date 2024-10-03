let ibtn = document.querySelector("i");
let divbtn = document.querySelector(".btn");

window.onscroll = () => {
    if (window.scrollY >= 600){
        ibtn.style.display = "block";
        divbtn.style.display = "block" ;
    }else{
        divbtn.style.display = "none" ;
        ibtn.style.display = "none";
    }

}
ibtn.onclick = function(){

    window.scrollTo(0 , 0) ;
}