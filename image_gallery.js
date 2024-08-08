document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    // Open lightbox and show the selected image
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImage.src = thumbnail.getAttribute('data-full');
            currentIndex = index;
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Show previous image
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        lightboxImage.src = thumbnails[currentIndex].getAttribute('data-full');
    });

    // Show next image
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        lightboxImage.src = thumbnails[currentIndex].getAttribute('data-full');
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
