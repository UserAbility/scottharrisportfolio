// when the document is ready, run this function
jQuery(function( $ ) {
    var keymap = {};

    // escape
    keymap[ 27 ] = "#home";
    // left
    keymap[ 37 ] = "#prev";
    // right
    keymap[ 39 ] = "#next";

    $( document ).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
});