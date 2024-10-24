function handlePageLoad() {
	showModal();
	showLoadingModal();

	setTimeout(() => {
		document.getElementById("content").classList.add("opacity-100");

		hideLoadingModal();
	}, 1000);
}

window.onload = handlePageLoad;

// smooth nav :sobb: took me way too long to figure out
function navigateTo(route) {
	showModal();
	showLoadingModal();

	document.getElementById("content").classList.remove("opacity-100");

	window.location.href = route;
}
