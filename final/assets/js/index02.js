window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const scrollTop = window.scrollY;
  const threshold = 200; // 设置滚动多少距离触发变化
  const scrolledClass = 'scrolled';

  if (scrollTop > threshold) {
      header.classList.add(scrolledClass);
  } else {
      header.classList.remove(scrolledClass);
  }
});

