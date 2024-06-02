document.querySelectorAll('.sidebar a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        updateBreadcrumb(category);

        // 跳轉到相應頁面，如果需要可以將其改為AJAX請求更新內容而不是跳轉
        const targetPage = this.getAttribute('href');
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