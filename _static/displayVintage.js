jQuery(document).ready(function($) {
	
	if ($('.v65-wine-vintage') != null) {
		$vintage = $('.v65-wine-vintage > .v65-product-attributeValue').text();
		$('#theVintage').text($vintage);
	}
});