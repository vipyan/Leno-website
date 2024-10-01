document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    const videoPlayer = document.getElementById('videoPlayer')

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    })

    // Video Modal
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    // Open model when clicked
    videoButton.addEventListener('click', function () {
        // Show modal
        modal.style.display = 'block';
        // Replace the source attribute with video URL
        videoPlayer.src = 'https://www.youtube.com/embeded/U9vzfIWIWJQ';

        // Close modal on close Button click
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            videoPlayer.src = '';
        });
        // Close modal on outer click
        window.addEventListener('click', function (event) {
            if (event.target == modal)
            {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        })

    });

});


// Navigation Background on scroll
window.addEventListener('scroll', function () {
    const navBar = document.querySelector('.navbar');

    if (scrollY > 0) {
        navBar.classList.add('navbar--scroll');
    } else {
        navBar.classList.remove('navbar--scroll');
    }
})

