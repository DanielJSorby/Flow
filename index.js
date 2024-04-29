console.log("index.js loaded");

fetch(".././flavours.json")
    .then((response) => response.json())
    .then((data) => {
        const flavours = data;
        console.log(flavours);
        for (let i = 0; i < flavours.length; i++) {
            const flavour = flavours[i];
            if (window.location.href === "http://127.0.0.1:5500/flavours/") {
                const flavourTemplate = createFlavourTemplate(flavour);
                document.querySelector(".flavours").innerHTML +=
                    flavourTemplate;
            }
            console.log(flavour);

        }
    });
function createFlavourTemplate(flavour) {
    const ingredients = flavour.ingredients ? flavour.ingredients.join('<br>') : 'No ingredients listed';
    return `
    <div class="flavour-container ${flavour.name}" style="background-color: ${flavour.mainColor}; color: ${flavour.secondColor}">
        <div class="flavour">
            <div class="flav-text-button">
                <div class="flav-text">
                    <h1 class="flav-name">${flavour.name}</h1>
                    <div class="flav-desc">
                        <p class="flav-ingredients">
                            ${ingredients}
                        </p>
                        <div class="line flav-line" style="background-color: ${flavour.secondColor}"></div>
                        <div class="flav-nutritions">
                            <p class="flav-numbers">${flavour.coffeine}<br>${flavour.vitamin}</p>
                            <p class="flav-names">Coffeine<br>Vitamin ${flavour.vitaminType}</p>
                        </div>
                    </div>
                </div>
                <a href="./${flavour.name}/">
                    <div class="flav-button">
                        <button>Purchase</button>
                    </div>
                </a>
            </div>
            <div class="flav-image">
                <img src="../images/Bottles/${flavour.name}.png" alt="${flavour.name}" class="flav-pic">
            </div>
        </div>
    </div>
    `;
}

/* Change color flavours */
$(document).ready(function () {
	$(window).scroll(function () {
		var scrollHeight = $(this).scrollTop();
		if (scrollHeight < $(window).height()) {
			// mindre enn 100vh
			$(".flavours-nav a").css("color", "#fff");
			$(".flavours-nav h1").css("color", "#fff");
			console.log("top");
		} else if (scrollHeight < 2 * $(window).height()) {
			// mellom 100vh og 200vh
			$(".flavours-nav a").css("color", "#6A8C65");
			$(".flavours-nav h1").css("color", "#6A8C65");
			console.log("middle");
		} else if (scrollHeight < 3 * $(window).height()) {
			// mellom 200vh og 300vh
			$(".flavours-nav a").css("color", "#FFFABA");
			$(".flavours-nav h1").css("color", "#FFFABA");
			console.log("bottom");
		}
	});
});
