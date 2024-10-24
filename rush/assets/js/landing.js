const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

function growCard(cardToGrow, cardToShrink) {
	cardToGrow.classList.add("grow");
	cardToShrink.classList.add("shrink");
}

function resetCards() {
	card1.classList.remove("grow", "shrink");
	card2.classList.remove("grow", "shrink");
}

card1.addEventListener("mouseover", () => growCard(card1, card2));
card1.addEventListener("mouseout", resetCards);

card2.addEventListener("mouseover", () => growCard(card2, card1));
card2.addEventListener("mouseout", resetCards);
