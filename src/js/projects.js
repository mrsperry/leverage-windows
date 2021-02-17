const convertID = id => {
    let result = "";
    for (const word of id.split("-")) {
        result += capitalize(word) + " ";
    }
    return result.substring(0, result.length - 1);
};

const capitalize = string => string.substring(0, 1).toUpperCase() + string.substring(1, string.length);

const getTypeText = type => {
    switch (type) {
        case 1: return "Contemporary / Modern";
        case 2: return "Traditional / Mediterranean";
    }
};

(() => {
    const template = $("#project-template");

    $.get("src/data/projects.json").done(projects => {
        for (const project of projects) {
            const clone = $(template.get(0).content.cloneNode(true));
    
            clone.children("a").attr("href", "projects/" + project.id + ".html");
            clone.find("img").attr("src", "src/assets/images/projects/" + project.id + "-1.jpg");
            clone.find(".title").text(convertID(project.id));
            clone.find(".type").text(getTypeText(project.type));
            clone.appendTo($(".projects"));
        }
    });

    template.remove();
})();