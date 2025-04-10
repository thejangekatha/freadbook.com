const fbProfileLink = "fb://profile/61572952346929"; // Facebook mobile app deep link format
const webLink = "https://web.facebook.com/profile.php?id=61572952346929"; // Fallback web URL

// Function to handle opening the link
function openFacebookLink() {
    // Try to open in Facebook app, fallback to web if app not installed
    window.location.href = fbProfileLink;
    setTimeout(() => {
        window.location.href = webLink;
    }, 1000);
}

// Add event listeners to all interaction buttons
document.querySelectorAll('.post-interactions button').forEach(button => {
    button.addEventListener('click', function (e) {
        // If it's the like button, toggle the 'liked' class
        if (this.classList.contains('like-button')) {
            this.classList.toggle('liked');
        }
        // Open Facebook link for all buttons
        openFacebookLink();
    });
});