jQuery(document).ready(function($) {
    if (window.matchMedia('(max-width: 767px)').matches) {
        var mob = true;
    } else {
        var mob = false;
    }
    if ($('.v65-wine-vintage') != null) {
        $vintage = $('.v65-wine-vintage > .v65-product-attributeValue').text();
        $('#theVintage').text($vintage);
    }
    vin65.cart.toggleCart();
    $('.trigger--nav').on('click touchstart', function(event) {
        event.preventDefault();
        $('body').toggleClass('open');
    });
    if ($('.v65-product-addToCart') != true) {
        $('.v65-product-addToCart-price').each(function(index) {
            $bottleCost = $(this).text().replace('$', '');
            $clubDiscount = $bottleCost * 0.3;
            $clubValue = $bottleCost - $clubDiscount;
            $clubValueWithZero = $clubValue.toFixed(2);
            $caseValue = ($bottleCost - $bottleCost * 0.05) * 12;
            $caseValueWithZero = $caseValue.toFixed(2);
            $(this).prepend('<div class="wineClubPrice"><span class="money">$' + $clubValueWithZero + '</span><span class="text font--smaller font--sans">Club Price</span></div><div class="wineClubPrice"><span class="money">$' + $caseValueWithZero + '</span><span class="text font--smaller font--sans">Case Price</span></div>');
            $(this).append('<span class="regularPrice">Regular Price</span>');
        });
    }
});