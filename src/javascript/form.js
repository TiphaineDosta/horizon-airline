['from', 'to'].forEach(id => {
    let input = document.getElementById(id);
    new google.maps.places.Autocomplete(input);
});

['departure', 'return'].forEach(id => {
    flatpickr("#" + id, {
        dateFormat: "d/m/y"
    });
});

document.addEventListener('DOMContentLoaded', e => {
    let str = '';
    for (var i = 1; i <= 10; ++i) {
        str += `<option value=${i}>Adult : ${i}</option>`
    }
    document.getElementById('size').innerHTML = str;
})