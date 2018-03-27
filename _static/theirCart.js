jQuery(document).ready(function($) {
    vin65.cart.toggleCart();
});
jQuery(document).keyup(function(event) {
    if (event.keyCode == 27) {
        vin65.cart.hideCart();
    }
});