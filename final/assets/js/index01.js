document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const overlayLink = document.querySelector('.overlay a');
    const dotsContainer = document.getElementById('dots');
    const images = [
        'img/banner01.png',
        'img/banner02.png',
        'img/banner03.png',
        'img/banner04.png',
        'img/banner05.png'
    ];
    const links = [
        'product1.html',
        'product2.html',
        'product3.html',
        'product4.html',
        'product5.html'
    ];
    const texts = [
        '進入山木島頁面',
        '進入如邑堂頁面',
        '進入軒記頁面',
        '進入明月堂頁面',
        '進入哈頓頁面'
    ];
    const INTERVAL_TIME = 6000;
    let currentImageIndex = 0;

    function changeImage(index) {
        if (images[index]) {
            banner.style.backgroundImage = `url(${images[index]})`;
            overlayLink.href = links[index];
            overlayLink.textContent = texts[index];
            banner.style.backgroundSize = (index === 1 || index === 4) ? '100% 100%' : 'cover';
            updateDots(index);
            console.log(`Image changed to: ${images[index]}`);
        } else {
            console.error(`Image at index ${index} is not found.`);
        }
    }

    function updateDots(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentImageIndex = index;
                changeImage(currentImageIndex);
            });
            dotsContainer.appendChild(dot);
        });
        updateDots(currentImageIndex);
    }

    initDots();
    changeImage(currentImageIndex);

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        changeImage(currentImageIndex);
    }, INTERVAL_TIME);
});

