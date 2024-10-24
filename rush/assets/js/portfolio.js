const data = {
	pat: {
		metadata: {
			title: "Pat's Site",
		},
		landing: {
			title: "Phat Lorthammakun",
			subtitle: "Fullstack Developer",
			image: "assets/images/pat.jpg",
		},
		about: {
			title: "About Me",
			subtitle: "I'm a fullstack developer from Thailand.",
			description: "I'm a full...",

			skills: {
				title: "Skills",
				subtitle: "I have experience with the following technologies:",
				skills: [
					{ name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
					{ name: "CSS", icon: "https://skillicons.dev/icons?i=CSS" },
				],
			},

			education: {
				title: "Education",
				education: [
					{
						name: "Bangkok Christian College",
						description: "High School",
						icon: "https://skillicons.dev/icons?i=computer-science",
						time: "20xx - Today",
						subtitle:
							"Atttended high school at Bangkok Christian College in Thailand with a focus on computer science.",
					},
					{
						name: "Test",
						description: "Middle School",
						icon: "https://skillicons.dev/icons?i=computer-science",
						time: "20xx - Today",
						subtitle: "Atttended yaddee yaadaa.",
					},
				],
			},
		},
	},
	tar: {
		metadata: {
			title: "Tar's Site",
		},
	},
};

function applyData() {
	console.log("applyData");

	// check if
	const url = window.location.href;
	const id = url.split("#")[1];
	const port = data[id];

	if (!port) {
		showErrorModal({
			title: "Invalid Portfolio",
			subtitle: "Portfolio not found!",
			description: "Please try again later.",
		});

		setTimeout(() => {
			window.location.href = "/";
		}, 1000);
		return;
	}

	try {
		document.title = port.title;

		showContent();
		hideLoadingModal();
	} catch (e) {
		console.error(e);
		showErrorModal();

		setTimeout(() => {
			window.location.href = "/";
		}, 1000);
	}
}
// wait for the page to load
