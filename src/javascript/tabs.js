let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        document.querySelectorAll('.active')[0].classList.remove('active');
        tab.classList.add('active');
    })
})