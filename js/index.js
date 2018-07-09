var items = [
    {
        type: "villa" , location: "Skopje", description: "Lorem ipsum doret.", price: 90, img: "images/villas/villa_01.jpeg"
    },{
        type: "villa" , location: "Bitola", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 120, img: "images/villas/villa_02.jpeg"
    },{
        type: "appartment" , location: "Gevgelija", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 80, img: "images/appartments/appartment_01.jpg"
    },{
        type: "house" , location: "Dojran", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 100, img: "images/houses/house_01.jpeg"
    },{
        type: "house" , location: "Valandovo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 75, img: "images/houses/house_02.jpeg"
    },{
        type: "appartment" , location: "Skopje", description: "Lorem ipsum doret.",  price: 200,img: "images/appartments/appartment_02.jpg"
    },{
        type: "villa" , location: "Ohrid", description: "Lorem ipsum doret.", price: 120, img: "images/villas/villa_03.jpeg"
    },{
        type: "villa" , location: "Skopje", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 180, img: "images/villas/villa_04.jpeg"
    },{
        type: "house" , location: "Gevgelija", description: "Lorem ipsum doret.", price: 160, img: "images/houses/house_03.jpeg"
    },{
        type: "house" , location: "Strumica", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 120, img: "images/houses/house_04.jpeg"
    },{
        type: "appartment" , location: "Strumica", description: "Lorem ipsum doret.", price: 220, img: "images/appartments/appartment_03.jpg"
    },{
        type: "appartment" , location: "Skopje", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 250, img: "images/appartments/appartment_04.jpg"
    },{
        type: "villa" , location: "Berovo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: 165, img: "images/villas/villa_05.jpeg"
    },{
        type: "villa" , location: "Stip", description: "Lorem ipsum doret.", price: 150, img: "images/villas/villa_06.jpg"
    }
];

// console.log(items.length);

var element = $('<div>' +
    '            <div class="item">' +
    '            <div class="item-image">' +
    '                <a class="fancybox"><img id="image"></a>' +
    '            </div>' +
    '            <div class="item-description">' +
    '                <h2 class="item-title text-capitalize"></h2>' +
    '                <h3 class="item-location text-capitalize"></h3>' +
    '                <p class="description-paragraph"></p>' +
    '                <div class="item-rating">' +
    '                    <section class=\'rating-widget\'>' +
    '                    <!-- Rating Stars Box -->' +
    '                    <div class=\'rating-stars text-center\'>' +
    '                        <ul class="stars">' +
    '                            <li class=\'star\' title=\'Poor\' data-value=\'1\'>' +
    '                                <i class=\'fa fa-star fa-fw\'></i>' +
    '                            </li>' +
    '                            <li class=\'star\' title=\'Fair\' data-value=\'2\'>' +
    '                                <i class=\'fa fa-star fa-fw\'></i>' +
    '                            </li>' +
    '                            <li class=\'star\' title=\'Good\' data-value=\'3\'>' +
    '                                <i class=\'fa fa-star fa-fw\'></i>' +
    '                            </li>' +
    '                            <li class=\'star\' title=\'Excellent\' data-value=\'4\'>' +
    '                                <i class=\'fa fa-star fa-fw\'></i>' +
    '                            </li>' +
    '                            <li class=\'star\' title=\'WOW!!!\' data-value=\'5\'>' +
    '                                <i class=\'fa fa-star fa-fw\'></i>' +
    '                            </li>' +
    '                        </ul>' +
    '                    </div>' +
    '                        <div class=\'success-box\'>' +
    '                            <div class=\'text-message\'></div>' +
    '                        </div>' +
    '                </section>' +
    '                </div>' +
    '            </div>' +
    '            <div class="item-price"></div>' +
    '        </div>' +
    '        </div>');

var villaCounter=0;
var houseCounter=0;
var appartmentCounter=0;

for (var i in items) {
    var newEl=$(element);
    $(newEl).find('.item').attr('id','item-'+i);
    $(newEl).find('#item-'+i).removeClass("villa house appartment");
    $(newEl).find('#item-'+i).addClass(items[i].type);

    $(newEl).find(".item-image .fancybox").attr('href', items[i].img);
    $(newEl).find(".item-image img").attr('src', items[i].img);
    $(newEl).find('.item-title').html(items[i].type);
    $(newEl).find('.item-location').html(items[i].location);

    $(newEl).find('.description-paragraph').html(items[i].description);
    $(newEl).find('.item-price').html('&euro; '+ items[i].price);
    $('.content').append($(newEl).html());

    if(items[i].type=='villa') {
        villaCounter++;
    }
    else if(items[i].type=='house') {
        houseCounter++;
    }
    else {
        appartmentCounter++;
    }
}

$('.filter-all').append(' (' + items.length + ')');
$('.filter-house').append(' (' + houseCounter + ')');
$('.filter-villa').append(' (' + villaCounter + ')');
$('.filter-appartment').append(' (' + appartmentCounter + ')');