var linkArray =[].slice.call(document.querySelectorAll('a'));

function disableClick(link) {
    'use strict';
    link.addEventListener('click', function(event) {
        event.preventDefault();
		    console.log('You cannot click!!!');
    });
}

linkArray.forEach(disableClick);
