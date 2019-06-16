document.querySelectorAll('.travel').forEach(travel => {
    travel.addEventListener('click', e => {
        document.querySelectorAll('.travel').forEach(el => {
            let target = e.path.find(el => el.className.includes("travel"))
            if (el.dataset.travel == target.dataset.travel) {
                el.classList.remove('travel-active');
                el.childNodes[3].childNodes[7].innerHTML = '<div class=\'btn-orange-alter\'>Book</div>'
            };
        })
        travel.classList.add('travel-active');
        travel.childNodes[3].childNodes[7].innerHTML = '<div class=\'btn-orange-alter\'>Booked</div>'
        document.getElementById('payment').removeAttribute('hidden')
    })
})

document.querySelectorAll('.radio').forEach(el => {
    el.addEventListener('change', e => {
        if (e.target.id == "fid-no" && e.target.checked) {
            document.getElementById('merch-fid').style = "display: block;"
        } else {
            document.getElementById('merch-fid').style = "display: none;"
        } 
    })
})