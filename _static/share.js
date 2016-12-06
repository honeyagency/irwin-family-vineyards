jQuery(document).ready(function($) {
    if ($('#twitterShare') != null) {
        $twitter = $('#twitterShare');
        $pageTitle = $twitter.data('title');
        $pageUrl = document.URL;
        $twitter.attr('href', 'http://twitter.com/intent/tweet?status=' + $pageTitle + '+' + $pageUrl);
    }
    if ($('#facebookShare') != null) {
        $facebook = $('#facebookShare');
        $pageTitle = $facebook.data('title');
        $pageUrl = document.URL;
        $facebook.attr('href', 'http://www.facebook.com/sharer/sharer.php?u=' + $pageUrl + '&title=' + $pageTitle);
    }
});