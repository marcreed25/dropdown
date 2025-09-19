var nav = document.getElementsByTagName('nav')[0];

nav.setAttribute('open', 'false');

function toggleNav() {
    if (nav.getAttribute('open') == 'false') {
        nav.style.display = 'block';
        nav.setAttribute('open', 'true');
    } else {
        nav.style.display = 'none';
        nav.setAttribute('open', 'false');
    }
}