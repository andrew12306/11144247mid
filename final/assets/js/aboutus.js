document.addEventListener('DOMContentLoaded', function() {
    var circleBtns = document.querySelectorAll('.circle-btn');
    var nameContent = document.getElementById('name-content');
    var detailContent = document.getElementById('detail-content');

    circleBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var name = btn.getAttribute('data-name');
            var description = btn.getAttribute('data-description');
            nameContent.textContent = name; // 顯示姓名
            detailContent.textContent = description; // 顯示心得
        });
    });
});
