(() => {
    const delay = 100;
    const interval = 1000;

    const elements = $(".project");
    for (let index = 0; index < elements.length; index++) {
        $(elements[index]).css("opacity", 0).delay(index * delay).animate({
            "opacity": 1
        }, interval);
    }
})();