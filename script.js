const gallery = document.getElementById("gallery");

window.onmousemove = (event) => {
    const mouse = {
        x: event.clientX,
        y: event.clientY
    }
    const percentage = {
        x: mouse.x / window.innerWidth,
        y: mouse.y / window.innerHeight
    }

    const pan = getPan(percentage)

    gallery.animate({
        transform: `translate(${pan.x}px, ${pan.y}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
}

function getPan(percentage) {
    const max = {
        x: window.innerWidth - gallery.offsetWidth,
        y: window.innerHeight - gallery.offsetHeight
    }
    const pan = {
        x: max.x * percentage.x,
        y: max.y * percentage.y
    }
    return pan
}

// Center pan on page load
const mid = {
    x: 0.5,
    y: 0.5
}
const start = getPan(mid)
gallery.style.transform = `translate(${start.x}px, ${start.y}px)`