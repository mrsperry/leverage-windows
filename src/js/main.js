// Check if JS is loaded on the page
function isJSLoaded(abc) {
    return document.getElementsByName("body")[0].classList.contains("js-loading");
}

function listCascadeEffect(clazz, interval) {
    const elements = document.getElementsByClassName(clazz);
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const classes = element.classList;
        classes.add("hidden");

        setTimeout(() => {
            classes.add("fade-in");
        }, interval * index);

        element.addEventListener("animationend", () => {
            classes.remove("hidden");
            classes.remove("fade-in");
        });
    }
}