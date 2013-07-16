// Bind to document ready
$(document).ready(function () {

    // We bind to the piano_assitance class, which is the piano icon and the text beneath the password field
    $('.piano_assitance').live('click', function () {
        // Once that area has been clicked we load the piano keyboard HTML code into a target div which is set to be invisible using a display: none directive
        $("#target").load('piano.html');
        // And then display it using jQuery's UI dialog method
        $("#target").dialog("open");
    });


    $("#target").dialog({
        autoOpen: false,
        height: 550,
        show: {
            effect: "slide",
            duration: 100
        },
        hide: {
            effect: "fade",
            duration: 100
        },
        width: 1100,
        modal: true,
        resizable: false,
        title: 'Play the piano to compose a password',
        buttons: {
            "Reset": function () {
                $('#target_piano_keypress').val('');
            },
            "Cancel": function () {
                $(this).dialog("close");
            },
            "Ok": function () {
                $('#target_piano_compose').val($('#target_piano_keypress').val());
                $(this).dialog("close");
            }
        }
    });

});
