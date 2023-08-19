import '../scss/styles.scss';
import 'jquery';
import '../img/icon.webp';
import '../img/navbar.webp';
import '../video/Main_1.webm';


const bubbles = $('.bubbles')
setInterval(() => {
    const duration = Math.random() * 10 + 10;

    const bubble = $(`<div class="bubble"></div>`)
    bubble.css({
        "--bubble-left-offset": `${(Math.random() * 100).toFixed(0)}%`,
        "--bubble-size": `${(Math.random() * 150 + 10).toFixed(0)}px`,
        "--bubble-float-duration": `${(duration).toFixed(0)}s`,
        "--bubble-float-delay": `0s`,
        "--bubble-sway-type": Math.random() > 0.5 ? "sway-left-to-right" : "sway-right-to-left",
        "--bubble-sway-duration": `${(Math.random() * 6 + 4).toFixed(0)}s`,
        "--bubble-sway-delay": `${(Math.random() * 5).toFixed(0)}s`,
    })
    bubbles.append(bubble)

    setTimeout(() => {
        bubble.remove()
    }, duration * 1000);
}, 1000);
