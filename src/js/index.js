// Play next slide when video ends
$("video").on("ended", () => $(".carousel").carousel("next"));

// Restart video when selected
$(".carousel").on("slide.bs.carousel", args => {
    if (args.to === 0 || args.to === 4) {
        const video = $("#video-" + (args.to === 0 ? 1 : 2)).get(0);
        video.currentTime = 0;
        video.play();
    }
});