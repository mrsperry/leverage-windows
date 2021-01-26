(() => {
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
            .on("click", () => {
                const modal = $("<div>")
                    .addClass("modal")
                    .hide()
                    .fadeIn()
                    .appendTo(document.body);
                
                const closeModal = () => modal.fadeOut(400, () => modal.remove());

                $("<div>")
                    .addClass("background")
                    .on("click", () => closeModal())
                    .appendTo(modal);
                
                const content = $("<div>")
                    .addClass("content")
                    .appendTo(modal);
                $("<button>")
                    .text("X")
                    .on("click", () => closeModal())
                    .appendTo(content);
                $(clone)
                    .appendTo(content);
            });
    }
})();