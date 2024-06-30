// function showPopup(card) {
//     document.getElementsByClassName('profile')[0].style.visibility= 'visible';
//     console.log(String(card));
//     // popup.style.visibility = 'visible';
// }

// // function foo(){
// //     console.log('hello');
// // }
var i = 0;
var headerText = "zatyhan\'s space";
var speed = 100;
var currentText= '';
function typeWriter() 
{
    if (i < headerText.length) {
        currentText+=headerText.charAt(i);
        // console.log(currentText);
        $("header").html(currentText+'<span class=\'blink\'>|</span>'); 
        i++;
        setTimeout(typeWriter, speed);
        setInterval(()=> {
            $("header .blink").fadeOut(300);
            $("header .blink").fadeIn(300);
        }, 2000);
        
    }
    // if (i == headerText.length)
    // {
    //         $('header').html();
    //         i=0;
    //         currentText='';
    // }
}



$(document).ready(function(){
    var verticalCircleAnime = anime({
        targets: '.vertical-line',
        height: ['0px', '50rem'],
        easing: 'linear',
        duration: 3000,
        repeat: 1
        // loop: true,
    });

    var educationAnime = anime.timeline({
        easing: 'linear',
        duration: 3000,
        backgroundColor: '#f1c40f',
    });
    educationAnime.add({
        targets: '.hs1',
        height: ['0px', '100px'],
        duration: 1000,
        easing: 'easeOutQuart'
    }).add({
        targets: '.college',
        height: ['0px', '250px'],
        duration: 1000,
        easing: 'easeOutQuart'
    }).add({
        targets: '.university',
        height: ['0px', '400px'],
        duration: 1000,
        easing: 'easeOutQuart'
    });
    $('.popup').hide();
    $('.popup.education').show();
    typeWriter();
    // setInterval(()=>{
    //     typeWriter();
    //     setInterval(()=> {
    //         $("header .blink").fadeOut(300);
    //         $("header .blink").fadeIn(300);
    //     },
    //     2000);
    // }, 5000);


    $('.card').hover(function(){
        $(this).css('transform' , 'scale(1.1)');
    }, function(){
        $(this).css('transform' , 'scale(1.0)');
    });

    $('.card').click(function(){
        console.log($(this).attr("id"));
        $('.popup.'+$(this).attr("id")).show();
        if ($(this).attr("id")=="education")
        {
            verticalCircleAnime.restart();
            // $('.edbox.hs1').slideDown();
            // $('.edbox.college').slideDown();
            // $('.edbox.university').slideDown();
            educationAnime.restart();
            // educationAnime.seek(0);
        }
        
    });
    
    $('.close-container').click(function(){
        console.log($(this).parent().attr("class"));
        $($(this).parent()).hide();
        if ($(this).attr("class")=="education popup")
        {
            verticalCircleAnime.seek(0);
            educationAnime.seek(0);
        }
    });
    });