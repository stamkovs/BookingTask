$(document).ready(function(){

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('.stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('.stars li').on('click touch', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }


        // JUST RESPONSE (Not needed)



        /*custom js i.e. changed default code here*/

        // var ratingValue = parseInt($('.stars li.selected').last().data('value'), 10);

        var msg = $(this).parent().parent()[0].nextElementSibling.firstElementChild;
        // var msg2 = msg[0].nextElementSibling;
        // var msg3= msg2.firstElementChild;
        var text= document.createTextNode(onStar);
        msg.innerHTML="";
        msg.appendChild(text);

        // .innerHTML("<span>" + ratingValue + "</span>");
        /*$('.success-box').fadeIn(200);
        $('.success-box div.text-message').html("<span>" + msg + "</span>");*/
    });


});
