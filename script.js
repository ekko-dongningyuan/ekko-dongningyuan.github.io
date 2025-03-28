const photos = [
    { src: 'photo1.jpg', thumb: 'thumb_photo1.jpg', caption: 'ChongQing' },
    { src: 'photo2.jpg', thumb: 'thumb_photo2.jpg', caption: 'HangZhou XiHu' },
    // Add more photos here
];

const gallery = document.querySelector('.gallery');

photos.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'photo-item';
    item.innerHTML = `
        <a href="images/${photo.src}" data-lightbox="gallery" data-title="${photo.caption}">
            <img src="images/${photo.thumb}" alt="${photo.caption}" loading="lazy">
        </a>
        <p>${photo.caption}</p>
    `;
    gallery.appendChild(item);
});

window.addEventListener('load', () => {
    gallery.classList.add('loaded');
});
