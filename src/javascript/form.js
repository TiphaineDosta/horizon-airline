['from', 'to'].forEach(id => {
    let input = document.getElementById(id);
    new google.maps.places.Autocomplete(input);
});

['departure', 'return'].forEach(id => {
    flatpickr("#" + id, {
        dateFormat: "d/m/y"
    });
});

document.querySelectorAll('.lang-click').forEach(lang => {
    lang.addEventListener('click', e => {
        document.getElementById('lang').innerText = lang.textContent;
    })
})