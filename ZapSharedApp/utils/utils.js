"use strict";

var Utils = {

};

/**
     * Verify if email is valid.
     * @param {string} email the email that will be verified.
     * @returns {boolean} true if the email is valid or false otherwise.
     */
    validateEmail: function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
