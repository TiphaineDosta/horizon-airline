let pictures = ['bourse', 'parking', 'travel']

pictures.forEach((pic, i) => {
    let picture = document.querySelectorAll('.picture')[i];
    if (picture) {
        document.querySelectorAll('.picture')[i].style = `background-image: url('./src/assets/${pic}.jpg')`;
    }
})

document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.src = "./src/assets/ARROW.png";
})