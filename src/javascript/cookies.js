let cookie = document.getElementById('cookies');

if (sessionStorage.getItem('cookie')) {
    cookie.style = "display: none;";
}

document.getElementById('close').addEventListener('click', e => {
    cookie.style = "display: none;";
    sessionStorage.setItem('cookie', 1);
});