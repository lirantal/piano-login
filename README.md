piano-login
===========
For traditional login systems which require a username and password to
authenticate the user, choosing and remembering a password poses an obstacle for
the end user. This complexity increases with the amount of accounts the user has
created if he or she chooses wisely to use different login credentials.

The music-based login system introduces a new way for user to authenticate and
for web applications to verify the validity of the user.
Instead of attempting to generate a memorizable password, users can bring up a
piano player widget onto the screen where they can play a tune which is
memorable and personal to them. The piano key stores are then translated into a
password which is put in the password field.

![Screenshot1](https://raw.github.com/lirantal/piano-login/master/img/screenshot1.png)

ADVANTAGES
----------
1. Easying the user to choose and compose his own unique password based on a
   piano tune
2. Based on HTML5 and JavaScript. Absolutely no other widget is required.
3. Disrupting key-loggers which easedrop on keyboard keystores because the
   piano player widget is using mouse clicks

USE CASES
----------
1. User can make use of the piano player widget to set his own unique tune,
   instead of a 'Security Question'.
2. User can make use of the piano player widget to add another authenticity
   and validation factor for web applications.


![Screenshot2](https://raw.github.com/lirantal/piano-login/master/img/screenshot2.png)


ASSETS
===========
  * Very customizable and flexible set of HTML, CSS and JavaScript code
  * Piano WAV files provided and may be customized and replaced with other
    sound files (WAVs, MP3s or other supported HTML5 audio formats)


3rd PARTY LIBRARIES
===========
  1. jQuery
  2. jQuery UI
  3. Open Icons Library (http://openiconlibrary.sourceforge.net) for the
     audio keyboard icon


FILES
===========
  The main HTML file used for the login form is handled using the
  following components:
    1. login.css
    2. login.js
    3. login.html

  The piano-based player which can be re-used in other HTMLs outside of
  this example login form is handled using the following components:
    1. piano.css
    2. piano.js
    3. piano.html

  Images and sound files are provided in their respective folders img/ and
  sounds/


AUTHOR
===========
  Copyright (C) 2013 Liran Tal <liran.tal@gmail.com>

