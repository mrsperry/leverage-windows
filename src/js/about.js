(() => {
    for (const profile of $(".profiles div figure")) {
        const clone = profile.cloneNode(true);
        $(clone)
            .children("img")
            .removeAttr("role");

        const caption = $(clone).children("figcaption");
        $(caption)
            .children(".hidden")
            .removeClass("hidden");

        const name = $(caption)
            .children("a")
            .remove()
            .text();
        $("<span>")
            .addClass("name")
            .text(name)
            .prependTo(caption);


        const image = $(profile).children("img");
        const link = $(profile)
            .children("figcaption")
            .children("a");
        $(image).on("click", () => $(clone).appendTo(createModal("profile")));
        $(link).on("click", () => $(clone).appendTo(createModal("profile")));
    }

    for (const brand of $(".brands a")) {
        const clone = brand.cloneNode(true);
        const description = $(clone)
            .children("figure")
            .children("div")
            .remove()
            .html();
        $(clone)
            .children("figure")
            .children("figcaption")
            .html(description);

        $(brand)
            .removeAttr("href")
            .on("click", () => $(clone).appendTo(createModal("brand")));
    }
})();

const createModal = clazz => {
    const modal = $("<div>")
        .addClass("modal")
        .hide()
        .fadeIn()
        .appendTo(document.body);
    const closeModal = () => modal.fadeOut(400, () => modal.remove());

    $("<div>")
        .addClass("background")
        .on("click", closeModal)
        .appendTo(modal);

    const content = $("<div>")
        .addClass("content " + (clazz === undefined ? "" : clazz))
        .appendTo(modal);
    $("<button>")
        .text("X")
        .on("click", closeModal)
        .appendTo(content);

    return content;
};