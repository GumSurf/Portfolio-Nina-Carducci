function main() {
    var elements = document.querySelectorAll(".nav-link");

    if (elements) {
        elements.forEach(function (element) {
            element.addEventListener("click", function () {
                // Réinitialiser la couleur de tous les éléments
                elements.forEach(function (el) {
                    el.style.backgroundColor = "";
                });

                // Changer la couleur de l'élément cliqué
                element.style.backgroundColor = "#E1C523";
            });
        });
    }
}

setTimeout(function () {
    main();
}, 500);