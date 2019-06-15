['from', 'to'].forEach(id => {
    let input = document.getElementById(id);
    new google.maps.places.Autocomplete(input);
});

['departure', 'return'].forEach(id => {
    flatpickr("#" + id, {
        dateFormat: "d/m/y"
    });
});