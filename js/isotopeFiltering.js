var $grid = $('.content').isotope({
    // options
});
// filter items on button click
$('.sidebar').on( 'click touch', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});