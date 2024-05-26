// $(document).ready(function(){
//         console.log('This is jQuery reference document.');
//     $('p').click(function () {
//     $(this).hide();
// });  //hides the one clicked
// $('#id').click(function(){
//     console.log('Clicked on heading')
// })
// $('.class').click(function(){
//     console.log('Clicked on one of the pargraphs', this)
// })



// $('#eventid').on(
//     {
//         'mouseenter': function(){
//     console.log('You are inside the Event section');
//     },
//         'click': function(){
//         console.log('clicked');
//     }
// })

// $('.hid').fadeOut(2000, function(){
//     console.log('hidden');   //the function is executed after the effect has played out.
// })
// $('.hid').fadeIn(2000, function(){
//     console.log('visible');
// })
/*hide, show, fadeTo('speed', opacity(just in this), function(optional)), fadeToggle
slideUp, slideDown, slideToggle
$('.hid').slideToggle(2000);
*/

//Animate function in jQuery
// $('.hid').animate({
//     opacity: 0.3,
//     height: '250px',
//     width: '200px'
// }, 2000)
//slow, fast can also be used.

//when written multiple animates, they get queued and executed one after the other.
// $('.hid').animate({opacity: 0.5}, 2000)
// $('.hid').animate({width: '200px'}, 2000)
/* to stop, attach $('.hid').stop() with click of a button or go for something similar.*/

//DOM Manipulation (what is to be entered is entered just after the attribute, like $('.class').html('this will show up'))
//.text(...)
//.html(...)
//.val (textarea)
//.empty
//.remove
//.addClass, .toggleClass

//css
//.css('background-color', 'blue')

//AJAX
// $.get('https://code.jquery.com/jquery-3.6.0.js', function(data, status){
//     console.log(data);
//     console.log(status);
// });

// }) /*closing document.ready*/
