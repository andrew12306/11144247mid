document.querySelectorAll('.sidebar a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        updateBreadcrumb(category);
        filterProducts(category);
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
    const allProducts = document.querySelectorAll('.product-item');
    allProducts.forEach(product => {
        const categories = product.getAttribute('data-category').split(',').map(cat => cat.trim());
        if (categories.includes(category) || category === '全部商品') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// 初始化显示全部商品
filterProducts('全部商品');