document.querySelector('.search-icon').addEventListener('click', function() {
    var searchForm = document.getElementById('search-form');
    var searchIcon = document.querySelector('.search-icon');
    searchForm.classList.toggle('active');
    if (searchForm.classList.contains('active')) {
        searchIcon.style.marginRight = searchForm.offsetWidth + 'px';
    } else {
        searchIcon.style.marginRight = 0;
    }
    document.getElementById('search-input').focus();
});

document.getElementById('search-input').addEventListener('blur', function() {
    if (!this.value) {
        document.getElementById('search-form').classList.remove('active');
        document.querySelector('.search-icon').style.marginRight = 0;
    }
});