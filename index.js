let page = 0;

window.onload = () => {
    window.scrollTo(0, 0);
}

function ext() {
    const requestFullScreenDiv = document.getElementById("requestFullScreen");
    const child = requestFullScreenDiv.querySelectorAll("*");

    child.forEach(elem => {
        elem.style.display = "none";
    })
}

function fullscreen() {
    if (document.fullscreenElement === null) {
        const elem = document.documentElement;

        const requestFullScreen = elem.requestFullscreen || elem.mozRequestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;

        if (requestFullScreen) {
            requestFullScreen.call(elem).catch(err => {
                alert("Trang wed Không thể tự động vào chế độ toàn màn hình: " + err.message);
            });
        }
        ext();
    }
};

document.getElementById("u").onclick = function() {
    window.scrollBy(0, -window.innerHeight);
};
document.getElementById("d").onclick = function() {
    window.scrollBy(0, window.innerHeight);
};

window.addEventListener("scroll", () => {
    let sy = window.scrollY;
    page = Math.round(sy / window.innerHeight);
    console.log(page);
    window.scrollTo(0, page * window.innerHeight);

})

document.addEventListener("keydown", (keyEvent) => {
    if(keyEvent.key == "ArrowUp") {
        window.scrollBy(0, -window.innerHeight);
    }
    if(keyEvent.key == "ArrowDown") {
        window.scrollBy(0, window.innerHeight);
    }
});

function scrollToPage() {
    window.scrollTo(0, page * window.innerHeight);
}

document.addEventListener("fullscreenchange", scrollToPage);
document.addEventListener("webkitfullscreenchange", scrollToPage);
document.addEventListener("mozfullscreenchange", scrollToPage);
document.addEventListener("MSFullscreenChange", scrollToPage);

window.addEventListener("resize", scrollToPage);

document.addEventListener("dblclick", () => {
    window.scrollBy(0, window.innerHeight);
});

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    let clickTime = Date.now();

    if(document.lastClickTime && (clickTime - document.lastClickTime) < 500) {
        window.scrollBy(0, -window.innerHeight);
    }
    document.lastClickTime = clickTime;
})