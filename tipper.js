const tippers = document.getElementsByClassName("tipper");

// gets all elements with a class of 'tipper'
for (let tipy of tippers) {
	// selects tippers first child (icon img) and add the event listener 'click'
	tipy.childNodes[0].addEventListener("click", (e) => {
		const $this = new Array(e.target);
		const tipText = tipy.dataset.tippertext;

		// Runs the showTip funct passing in the text to show and where to append it when displayed
		showTip(tipText, $this[0].parentNode);
	});
}

function showTip(tipTextIn, attachTip) {
	const hasChild = attachTip.querySelector(".tipsyOut") != null;
	// If tip has already been shown - remove it, or...
	if (hasChild) {
		attachTip.querySelectorAll(".tipsyOut").forEach(function (a) {
			a.remove();
		});

		// ... build it and append it
	} else {
		const TipUp = document.createElement("div");
		TipUp.className = "tipsyOut";
		TipUp.innerHTML = `<div class="tipsyIn">
                        ${tipTextIn}
                        </div>
                    `;
		attachTip.appendChild(TipUp);
	}
}