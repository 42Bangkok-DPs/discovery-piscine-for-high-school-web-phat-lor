/*
	author: @phat-lor
	created: 2024-10-23
	please give credit if you use this code or snippet thanks :3
*/

let modalContainer = document.getElementById("modal-container");
let modal = document.getElementById("modal");
let previewTime, previewData, imgLoadTimeout;
let modalOpenTime;
let modalCloseTime;

let modal_name;

function showModal() {
	if (Date.now() < modalCloseTime + 750) return;

	modalContainer = document.getElementById("modal-container");
	modal = document.getElementById("modal");

	modalContainer.addEventListener("click", (e) => {
		const timePassed = Date.now() > modalOpenTime + 450;
		// if (e.target === modalContainer && timePassed) hideModal();
	});

	modalOpenTime = Date.now();
	modalContainer.classList.remove("hidden");

	setTimeout(() => {
		modalContainer.classList.add(
			"backdrop-brightness-75",
			"backdrop-saturate-50",
			"backdrop-blur-md"
		);
		modalContainer.classList.remove("opacity-0");

		setTimeout(() => {
			modal.classList.remove(
				"scale-50",
				"opacity-0",
				"blur-lg",
				"translate-y-6"
			);
		}, 200);
	}, 0);
}

function hideModal(instant = false) {
	modalContainer = document.getElementById("modal-container");

	if (!modalContainer) {
		return setTimeout(() => {
			hideModal();
		}, 25);
	}

	modal = document.getElementById("modal");

	modalCloseTime = Date.now();

	if (instant) modalCloseTime -= 750;

	modalContainer.classList.remove(
		"backdrop-brightness-75",
		"backdrop-saturate-50",
		"backdrop-blur-md"
	);
	modal.classList.add("scale-50", "opacity-0", "blur-lg", "translate-y-6");

	setTimeout(
		() => {
			modalContainer.classList.add("opacity-0");
			setTimeout(
				() => {
					modalContainer.classList.add("hidden");
				},
				instant ? 0 : 500
			);
		},
		instant ? 0 : 200
	);
}

function showLoadingModal() {
	showModal();

	modal.innerHTML = `
            <div class="flex justify-between flex-wrap">
                <span class="-mt-2">
                    <h4 id="loading-title" class="text-md text-[#878289]">Loading...</h4>
                    <h4 id="loading-desc" class="text-2xl font-semibold text-text">Hang Tight!</h4>
                    <p id="loading-subtitle" class="text-sm text-[#878289]">
                        Please be patient...
                    </p>
                </span>
            </div>
    
            <div class="la-ball-climbing-dot la-2x">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>`;
}

/*
	Take in 
	error: {
		title: string,
		subtitle: string,
		description: string
	}
*/
function showErrorModal(
	error = {
		title: "Error has occured!",
		subtitle: "Something went wrong!",
		description: "Please try again later.",
	}
) {
	const climbingBall = document.querySelector(".la-ball-climbing-dot");
	const loadingTitle = document.getElementById("loading-title");
	const loadingSubtitle = document.getElementById("loading-subtitle");
	const loadingDesc = document.getElementById("loading-desc");

	if (loadingTitle) loadingTitle.innerText = error.title;
	if (loadingSubtitle) loadingSubtitle.innerText = error.subtitle;
	if (loadingDesc) loadingDesc.innerText = error.description;

	climbingBall.classList.add(
		"translate-x-1/2",
		"opacity-0",
		"blur-md",
		"duration-300",
		"scale-125",
		"-rotate-90"
	);

	setTimeout(() => {
		climbingBall.classList.remove("duration-300", "-rotate-90");
		climbingBall.classList.add(
			"flex",
			"justify-center",
			"items-center",
			"rotate-90"
		);
		climbingBall.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 15 15"><path fill="#F31260" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>`;
		setTimeout(() => {
			climbingBall.classList.add("duration-300");
			climbingBall.classList.remove(
				"translate-x-1/2",
				"opacity-0",
				"blur-md",
				"scale-125",
				"rotate-90"
			);
		}, 0);
	}, 300);
}

function hideLoadingModal() {
	const climbingBall = document.querySelector(".la-ball-climbing-dot");
	const loadingTitle = document.getElementById("loading-title");
	const loadingSubtitle = document.getElementById("loading-subtitle");
	const loadingDesc = document.getElementById("loading-desc");

	loadingTitle.innerText = "Sucess!";
	loadingSubtitle.innerText = "You're all set!";

	climbingBall.classList.add(
		"translate-x-1/2",
		"opacity-0",
		"blur-md",
		"duration-300",
		"scale-125",
		"-rotate-90"
	);

	setTimeout(() => {
		climbingBall.classList.remove("duration-300", "-rotate-90");
		climbingBall.classList.add(
			"flex",
			"justify-center",
			"items-center",
			"rotate-90"
		);
		climbingBall.innerHTML = `
<svg width="42" height="30" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_191_800)">
    <path d="M11.8967 2.6718C12.3523 2.21619 12.3523 1.4775 11.8967 1.02188C11.441 0.566273 10.7024 0.566273 10.2467 1.02188L4.76597 6.50265L1.99163 3.7283C1.53601 3.27269 0.797321 3.27269 0.341709 3.7283C-0.113902 4.18392 -0.113904 4.92261 0.341708 5.37822L3.91727 8.95378C3.92494 8.96189 3.93274 8.96992 3.94068 8.97786C4.14357 9.18075 4.4026 9.29329 4.66776 9.31548C4.67681 9.31624 4.68587 9.31689 4.69493 9.31744C5.01684 9.33707 5.34534 9.2239 5.59132 8.97791C5.59986 8.96937 5.60825 8.96072 5.61647 8.95198L11.8967 2.6718Z" fill="#12B76A" />
  </g>
  <defs>
    <filter id="filter0_i_191_800" x="0" y="0.680176" width="12.2383" height="9.22274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="0.583333" />
      <feGaussianBlur stdDeviation="0.291667" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_191_800" />
    </filter>
  </defs>
</svg>;
`;

		setTimeout(() => {
			climbingBall.classList.add("duration-300");
			climbingBall.classList.remove(
				"translate-x-1/2",
				"opacity-0",
				"blur-md",
				"scale-125",
				"rotate-90"
			);

			setTimeout(() => {
				hideModal();
			}, 500);
		}, 0);
	}, 300);
}
