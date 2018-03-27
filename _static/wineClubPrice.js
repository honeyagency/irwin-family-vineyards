jQuery(document).ready(function($) {
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