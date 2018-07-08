var area = document.querySelector('body');
var containers = document.querySelector('.parallax');
    function directionAnimation() {
        area.addEventListener('mousemove', findDirection); 
    };

function findDirection(event) {
    cx = Math.ceil(document.documentElement.scrollHeight / 2.0);
    cy = Math.ceil(document.documentElement.scrollWidth / 2.0);
    dx = event.pageX - cx;
    dy = event.pageY - cy;
    tiltx = (dy / cy);
    tilty = - (dx / cx);

    radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
    degree = (radius * 5);
    
    containers.style.transform = `
    translate(${tiltx}rem, ${tilty}rem)
    `;
}

directionAnimation();