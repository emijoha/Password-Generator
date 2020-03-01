# Password-Generator
An application for generating unique passwords based on user-selected criteria.

Users are prompted to enter a desired password length from 8 to 128 characters.

Then, they are prompted to confirm if they would like to include uppercase, lowercase, number, and/or symbol character types.

When finished, a function runs in the background that generates a character string to include all the character types that where selected.

Upon clicking the "Generate Password" button, an event function is triggered that takes the user-selected length and passes in random characters.
The random password is that displayed in the html, and updates upon every future button click event.

If the password generate is empty becasue no character type criteria were selected, user is alerted to refresh and select at least on of the character types.

To generate passwords of different lengths or different combinations of characters, user is invited to refresh page and start with new inputs.

Script.js file has notes on how this application will be improved.
