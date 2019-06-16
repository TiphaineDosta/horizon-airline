document.querySelectorAll('.travel').forEach(travel => {
    travel.addEventListener('click', e => {
        document.querySelectorAll('.travel').forEach(el => {
            let target = e.path.find(el => el.className.includes("travel"))
            if (el.dataset.travel == target.dataset.travel) {
                el.classList.remove('travel-active');
            };
        })
        travel.classList.add('travel-active');
        document.getElementById('payment').style= "display: block;"
    })
})