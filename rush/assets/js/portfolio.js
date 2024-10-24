const data = {
	pat: {
		metadata: {
			title: "Pat's Site",
		},
		landing: {
			title: "Phat Lorthammakun ",
			subtitle: "Fullstack Developer",
			image: "assets/img/phat.png",
		},
		about: {
			title: "About Me",
			description:
				"Hello! I'm a high school student and full-stack developer! Since 2021, I have built websites, backends and games. I'm always looking for new projects to work on and new things to learn.",

			skills: {
				title: "Skills",
				subtitle: "I have experience with the following technologies:",
				skills: [
					{ name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
					{ name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
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
		document.title = port.metadata.title;

		// <div class="flex-row flex gap-1 items-center h-fit">
		// 							<img
		// 								src="https://skillicons.dev/icons?i=html"
		// 								alt="HTML"
		// 								class="w-7 h-7"
		// 							/>
		// 							<p>HTML</p>
		// 						</div>

		const landingTitle = document.getElementById("landing-title");
		landingTitle.innerText = port.landing.title;

		const landingSubtitle = document.getElementById("landing-subtitle");
		landingSubtitle.innerText = port.landing.subtitle;

		const landingImage = document.getElementById("landing-image");
		landingImage.src = port.landing.image;

		const skillsContent = document.getElementById("skills-content");
		const skills = port.about.skills.skills;
		skills.forEach((skill) => {
			const div = document.createElement("div");
			div.classList.add("flex-row", "flex", "gap-1", "items-center", "h-fit");
			div.innerHTML = `<img src="${skill.icon}" alt="${skill.name}" class="w-7 h-7" />
				<p>${skill.name}</p>`;
			skillsContent.appendChild(div);
		});

		const educationContent = document.getElementById("education-content");

		const aboutContent = document.getElementById("about-content");
		const p = document.createElement("p");
		p.innerText = port.about.description;
		aboutContent.appendChild(p);

		setTimeout(() => {
			showContent();
			hideLoadingModal();
		}, 1000);
	} catch (e) {
		console.error(e);
		showErrorModal();

		setTimeout(() => {
			window.location.href = "/";
		}, 1000);
	}
}
// wait for the page to load
