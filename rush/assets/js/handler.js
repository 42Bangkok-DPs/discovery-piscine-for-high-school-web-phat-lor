const manualRequired = ["portfolio", "portfolio.html"]

function handlePageLoad() {

	// change to false for cool loading animation
	var instant = false;
	if(instant) {
		showContent();

		hideLoadingModal();
		return;
	}

	showModal();
	showLoadingModal();

	console.log(window.location.pathname.split("/")[1])

	if(manualRequired.includes(window.location.pathname.split("/")[1])) {
		console.warn("Manual page load required");
		return;
	}

	setTimeout(() => {
		showContent();

		hideLoadingModal();
	}, 1000);
}

function showContent() {
	document.getElementById("content").classList.add("opacity-100");
}

window.onload = handlePageLoad;

// smooth nav :sobb: took me way too long to figure out
function navigateTo(route) {
	showModal();
	showLoadingModal();

	document.getElementById("content").classList.remove("opacity-100");

	setTimeout(() => {
		window.location.href = route;
	}, 500);
}
