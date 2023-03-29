        // Get the button
        var myButton = document.querySelector('.top-button');

        // When the user scrolls down 205 from the top of the document, show the button
        window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.classList.add('show');
        } else {
                myButton.classList.remove('show');
            }
        }