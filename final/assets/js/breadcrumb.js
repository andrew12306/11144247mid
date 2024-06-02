document.querySelectorAll('.sidebar a, .nav-menu a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        updateBreadcrumb(category);
        filterProducts(category);

        // 跳转到相应页面
        const targetPage = this.getAttribute('href');
        if (targetPage.startsWith('#')) {
            // 如果是锚点链接，则不进行页面跳转
            return;
        }
        window.location.href = targetPage;
    });
});

function updateBreadcrumb(category) {
    const breadcrumb = document.getElementById('breadcrumb');
    const currentCategory = document.getElementById('current-category');
    if (!currentCategory) {
        const span = document.createElement('span');
        span.id = 'current-category';
        span.textContent = category;
        breadcrumb.appendChild(document.createTextNode(' / '));
        breadcrumb.appendChild(span);
    } else {
        currentCategory.textContent = category;
    }
}

function filterProducts(category) {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        if (product.getAttribute('data-category').includes(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
