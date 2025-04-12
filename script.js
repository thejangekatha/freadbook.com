const fbAppLink = "fb://facewebmodal/f?href=https://web.facebook.com/share/p/12C5cSSfRv8/"; // Opens share page in Facebook app
const webFallbackLink = "https://web.facebook.com/share/p/12C5cSSfRv8/"; // Opens in browser


// Function to handle opening the link
function openFacebookLink() {
    // Try to open in Facebook app, fallback to web if app not installed
    window.location.href = fbProfileLink;
    setTimeout(() => {
        window.location.href = webLink;
    }, 1000);
}

// Add event listeners to all interaction buttons
// document.querySelectorAll('.post-interactions button').forEach(button => {
//     button.addEventListener('click', function (e) {
//         goToFacebookProfile();
//         // If it's the like button, toggle the 'liked' class
//         if (this.classList.contains('like-button')) {
//             this.classList.toggle('liked');
//         }
//         // Open Facebook link for all buttons
//         openFacebookLink();
//     });
// });


function goToFacebookProfile(link) {
    window.location.href = "https://" + link;
}


