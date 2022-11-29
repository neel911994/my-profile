// var i = 0;
// var txt = 'Lorem ipsum dummy text blabla.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// window.addEventListener("load",typeWriter);

var oldScrollY = window.scrollY;
//var directionText = document.getElementById('direction');
window.onscroll = function(e) {
  if(oldScrollY < window.scrollY){
     console.log("down!!");
      $(".head").hide();
  } else {
   console.log("up!!");
    $(".head").show();
  }
  oldScrollY = window.scrollY;
}

function applyScroll() {
    $.scrollify({
        section: '.scroll',
        sectionName: 'section-name',
        //standardScrollElements: 'section',
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
    });
}

function screenCheck() {
    console.log("hey!!");
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID || $(window).width() <= 768) {
        // its mobile screen
        $.scrollify.destroy();
        $('section').removeClass('scroll').removeAttr('style');
        $.scrollify.disable();
    } else {
        // its desktop
        $('section').addClass('scroll');
        applyScroll();
        $.scrollify.enable();
    }
}

$(document).ready(function(){
    $(".panel2").hide();
    $(".company li:first").css("text-decoration: underline");
    $(".company li").on('click',function(){
        console.log($(this).attr('value'));
        panel=$(this).attr('value');
        if(panel == 1){
            $(".company li:first").css("text-decoration: underline");
            $(".company li:eq(1)").css("text-decoration: none");
            $(".panel1").show();
            $(".panel2").hide();
        }else{
            $(".company li:first").css("text-decoration: none");
            $(".company li:eq(1)").css("text-decoration: underline");
            $(".panel1").hide();
            $(".panel2").show();
        }
    });
    
    const h1 = document.querySelector('.blast');
    let words = h1.textContent.split(' ');
    words = words.map(word => {
    let letters = word.split('');
    letters = letters.map(letter => `<span class="word_inner">${letter}</span>`);
    return letters.join('');
    });
    words = words.map(word => `<span class="word">${word}</span>`);
    h1.innerHTML = words.join(' ');
    console.log(h1.innerHTML);  

    // $(".word_inner").hover(function(){
    //     $(this).addClass("rubber-band");
    // })

})


$(window).on('resize', function () {
    screenCheck();
});
// window.addEventListener("")