// function showPopup(card) {
//     document.getElementsByClassName('profile')[0].style.visibility= 'visible';
//     console.log(String(card));
//     // popup.style.visibility = 'visible';
// }

// // function foo(){
// //     console.log('hello');
// // }

$(document).ready(function(){
    $('.card').hover(function(){
        $(this).css('transform' , 'scale(1.1)');
    }, function(){
        $(this).css('transform' , 'scale(1.0)');
    });

    $('.card').click(function(){
        console.log('.popup .'+$(this).attr("id"));
        $('.popup, .'+$(this).attr("id")).css('visibility', 'visible');
    });
});