"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('ukRuEKdZMHi111H3l37BwHuKCcRQlD5YvUZYKwT5', '8lCnAsFZqqWnsFaIZ4t9xHXZK0xaE6yRdLRqYWwQ');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
