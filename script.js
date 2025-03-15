var typed = new Typed('.type-animation', {
    strings: ['Junior Front End Dev'],
    loop:true,
    backSpeed:40,
    startDelay:88,
    typeSpeed:40,
    showCursor:true
});

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150; // Jarak dari bawah viewport untuk memicu animasi

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
