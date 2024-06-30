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
        }, 600);
        
    }
    // if (i == headerText.length)
    //     {
    //         setInterval(()=> {
    //             $("header .blink").fadeOut(300);
    //             $("header .blink").fadeIn(300);
    //         }, 600);
    //         // $('header').html();
    //         // setTimeout(()=> {
    //             //     i=0;
    //             //     currentText='';
    //             //     // typeWriter();
    //             // }, 3000)
                
    //         }
}

function typeWriterCaller() {
    i=0;
    currentText='';
    typeWriter();
    // console.log('calling');
    // setTimeout(typeWriter(), 5000);
}
        
        
        
$(document).ready(function(){
    var verticalCircleAnime = anime({
        targets: '.vertical-line',
        height: ['0px', '60rem'],
        easing: 'linear',
        duration: 3000,
        repeat: 1
    // loop: true,
    });

    var educationAnime = anime.timeline({
        easing: 'linear',
        duration: 3000,
        // backgroundColor: '#f1c40f',
    });
    educationAnime.add({
        targets: '.hs1',
        height: ['0px', '100%'],
        duration: 700,
        easing: 'easeOutQuart'
    }).add({
        targets: '.college',
        height: ['0px', '100%'],
        // height: ['0px', '250px'],
        duration: 1300,
        easing: 'easeOutQuart'
    }).add({
        targets: '.university',
        height: ['0px', '100%'],
        // height: ['0px', '500px'],
        duration: 2000,
        easing: 'easeOutQuart'
    });
    var yearAnime = anime.timeline({
        easing: 'linear',
        duration: 3000,
        backgroundColor: '#f1c40f',
    });
    yearAnime.add({
        targets: document.querySelector('._2016 > .year'),
        height: ['0px', '1em'],
        duration: 700,
        easing: 'easeOutQuart'
    }).add({
        targets: document.querySelector('._2017 > .year'),
        height: ['0px', '1em'],
        // height: ['0px', '250px'],
        duration: 1300,
        easing: 'easeOutQuart'
    }).add({
        targets: document.querySelector('._2019 > .year'),
        height: ['0px', '1em'],
        // height: ['0px', '500px'],
        duration: 2000,
        easing: 'easeOutQuart'
    });

    $('.popup').hide();
    setInterval(typeWriterCaller, 5000);


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
            educationAnime.restart();
            yearAnime.restart();
        }
        
    });
    
    $('.close-container').click(function(){
        console.log($(this).parent().attr("class"));
        $($(this).parent()).hide();
        if ($(this).attr("class")=="education popup")
            {
                verticalCircleAnime.seek(0);
                educationAnime.seek(0);
                yearAnime.seek(0);
        }
    });
    });