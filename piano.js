// Bind to document ready
$(document).ready(function () {

    // * Bind selector to both .white and .black class keys
    // * We bind on 'live' because we load dynamic HTML content to our base login.html page
    $('.white, .black').live('click', function (e) {

        // Get the id attribute which serves as a key for the piano key that was pressed
        var key = $(this).attr('id');

        // Select the audio element based on it's own id attribute
        var a = $('#audio-' + key);

        // Reset the file position to 0 and start playing and play the sound file again.
        $('#audio-' + key).get(0).currentTime = 0;
        $('#audio-' + key).get(0).play();

        // Populate the password input element with the keys that were played
        //input = $('#target_piano_compose').val();
        //$('#target_piano_compose').val(input + key);

        input = $('#target_piano_keypress').val();
        $('#target_piano_keypress').val(input + key);

    });

});
