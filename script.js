$(document).ready(function(){
    $(window).bind('scroll',function(){
        var gap = 20;
        if($(window).scrollTop()>gap){
            $('header').addClass('active');
        }
        else{
            $('header').removeClass('active');
        }
    });
});
$(function(){
    document.getElementById("button-text").onclick=function(){
        document.getElementById("hidden-logos").style.display="flex";
        document.getElementById("button-text").style.display="none";
        document.getElementById("see-less").style.display="inline";
    }
});
$(function(){
    document.getElementById("see-less").onclick=function(){
        document.getElementById("hidden-logos").style.display="none";
        document.getElementById("button-text").style.display="inline";
        document.getElementById("see-less").style.display="none";
    }
});
const menu=document.querySelector(".nav__menu");
const menuBtn=document.querySelector("#open");
const closeBtn=document.querySelector("#close-menu-btn");

const openNav=()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
}

menuBtn.addEventListener('click',openNav)
const closeNav=()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}

closeBtn.addEventListener('click',closeNav)
