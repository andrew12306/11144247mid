let currentIndex = 0;
const items = [
    { img: 'img/product1.png', text: '山木繁花', link: 'product1.html' },
    { img: 'img/product2.png', text: '原味牛軋糖', link: 'product2.html' },
    { img: 'img/product3.png', text: '羊羹禮盒', link: 'product3.html' },
    { img: 'img/product4.png', text: '蜜汁豬肉乾', link: 'product4.html' },
    { img: 'img/product5.png', text: '奶酒手工奶酪', link: 'product5.html' },
];

function createCarouselItemContent(item) {
    return `
        <a href="${item.link}" class="carousel-link">
            <img src="${item.img}" alt="${item.text}">
            <div class="carousel-overlay">
                <span>${item.text}</span>
            </div>
        </a>
    `;
}

function updateItem(index) {
    const carouselItems = document.querySelectorAll('.carousel-item');

    // Calculate the indexes for the left, middle, and right items
    const leftIndex = (index - 1 + items.length) % items.length;
    const rightIndex = (index + 1) % items.length;

    // Update the left item
    const leftItem = carouselItems[0];
    leftItem.innerHTML = createCarouselItemContent(items[leftIndex]);

    // Update the middle item
    const middleItem = carouselItems[1];
    middleItem.innerHTML = createCarouselItemContent(items[index]);

    // Update the right item
    const rightItem = carouselItems[2];
    rightItem.innerHTML = createCarouselItemContent(items[rightIndex]);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateItem(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateItem(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    updateItem(currentIndex);
});









