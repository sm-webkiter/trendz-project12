$(document).ready(function(){
    $('.sidebtn').click(function(){
        $('.menu').slideToggle('toggle');
        $('.sidebtn').toggleClass('clickbtn');
    });
});
