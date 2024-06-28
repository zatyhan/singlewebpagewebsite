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
    $('.popup').hide();
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
        console.log('.popup .'+$(this).attr("id"));
        $('.popup.'+$(this).attr("id")).show();
    });

    $('.close-container').click(function(){
        $($(this).parent()).hide();
    });
    });