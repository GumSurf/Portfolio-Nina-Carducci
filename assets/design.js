function main() {
    var elements = document.querySelectorAll(".nav-link");

    if (elements) {
        elements.forEach(function (element) {
            element.addEventListener("click", function () {
                // Réinitialiser la couleur de tous les éléments
                elements.forEach(function (el) {
                    el.style.backgroundColor = "";
                    el.style.color = "#000000";
                });

                // Changer la couleur de l'élément cliqué
                element.style.backgroundColor = "#615400";
                element.style.color = "#ffffff";
            });
        });
    }
}

setTimeout(function () {
    main();
}, 500);