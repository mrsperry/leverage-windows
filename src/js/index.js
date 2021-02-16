// Play next slide when video ends
$("#video").on("ended", () => $(".carousel").carousel("next"));

// Restart video when selected
$(".carousel").on("slide.bs.carousel", args => {
    if (args.to === 0) {
        const video = $("#video").get(0);
        video.currentTime = 0;
        video.play();
    }
});