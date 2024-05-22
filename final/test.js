document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const brand = document.querySelector('.brand');
    const logo = document.createElement('img');
    logo.src = 'logo.png'; // 設置您的 logo 圖片的路徑

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('logo'); // 添加 logo class
            brand.innerHTML = ''; // 清空品牌標題內容
            brand.appendChild(logo); // 添加 logo 到品牌標題
        } else {
            header.classList.remove('logo'); // 移除 logo class
            brand.innerHTML = '<h1><a href="#">盒家人雜貨店</a></h1><p>一個集結了五個品牌的專賣店，五大風格包你滿意！</p>';
        }
    });
});