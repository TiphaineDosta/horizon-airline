let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        document.querySelectorAll('.active')[0].classList.remove('active');
        tab.classList.add('active');
        document.querySelectorAll('.item-active').forEach(el => {
            el.classList.add('item');
            el.classList.remove('item-active');
        });
        document.querySelectorAll('.' + e.target.dataset.tab).forEach(el => {
            el.classList.add("item-active");
        })
    })
})