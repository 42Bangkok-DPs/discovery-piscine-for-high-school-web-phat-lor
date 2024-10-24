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
					{
						name: "JS",
						icon: "https://skillicons.dev/icons?i=javascript",
					},
					{ name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
					{ name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
					{ name: "React", icon: "https://skillicons.dev/icons?i=react" },
					{ name: "Python", icon: "https://skillicons.dev/icons?i=python" },
					{ name: "Java", icon: "https://skillicons.dev/icons?i=java" },
					{ name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
					{ name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
					{ name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
					{
						name: "Tailwind",
						icon: "https://skillicons.dev/icons?i=tailwindcss",
					},
					{ name: "Express", icon: "https://skillicons.dev/icons?i=express" },
					{ name: "Git", icon: "https://skillicons.dev/icons?i=git" },
				],
			},

			workExp: {
				title: "Work Experience",
				workExp: [
					{
						name: "Freelance",
						description: "Fullstack Developer",
						time: "20xx - Today",
					},
					{
						name: "Intern at dData",
						description:
							"Worked as an assistant programmer for the company. Completed and sorted 2500+ scraped data using AI Agent (ChatGPT API), improved landing page, search algorithm, and etc.",
						time: "11 March - 30 April 2024",
					},
				],
			},

			education: {
				title: "Education",
				education: [
					{
						name: "Bangkok Christian College",
						description: "High School",
						time: "20xx - Today",
					},
					{
						name: "Test",
						description: "Middle School",
						time: "20xx - 20xx",
					},
					{
						name: "Test",
						description: "Elementary School",
						time: "20xx - 20xx",
					},
				],
			},

			socials: {
				title: "Socials",
				socials: [
					{
						name: "GitHub",
						link: "https://github.com/phat-lor",
						icon: "https://skillicons.dev/icons?i=github",
					},
					{
						name: "Discord",
						link: "https://discord.com/users/xxx",
						icon: "https://skillicons.dev/icons?i=discord",
					},
					{
						name: "Email",
						link: "mailto:contact@phatlor.me",
						icon: "https://skillicons.dev/icons?i=gmail",
					},
					{
						name: "Twitter",
						link: "https://twitter.com/epiccpatty",
						icon: "https://skillicons.dev/icons?i=twitter",
					},
					{
						name: "LinkedIn",
						link: "https://www.linkedin.com/in/phat-lorthammakun-4135a7254",
						icon: "https://skillicons.dev/icons?i=linkedin",
					},
					{
						name: "Instagram",
						link: "https://instagram.com/phat.lor",
						icon: "https://skillicons.dev/icons?i=instagram",
					},
				],
			},
		},
		project: {
			title: "Projects",
			projects: [
				{
					name: "Detective Adventure",
					description:
						"An app to enhance tourism in an underrecognized district by promoting exploration through QR code scanning.",
					tech: [
						"nextjs",
						"tailwindcss",
						"nestjs",
						"mongodb",
						"cloudflare",
						"nginx",
					],
					link: "https://detectivegame.org/",
					image: "/assets/img/detectiveAd.png",
				},
				{
					name: "Payma.dev",
					description:
						"A project for me to learn about cryptocurrencies and transaction systems; it’s in development.",
					tech: [
						"nextjs",
						"tailwindcss",
						"nestjs",
						"mongodb",
						"cloudflare",
						"nginx",
					],
					link: "https://payma.dev",
					image: "/assets/img/payma.png",
				},
				{
					name: "fastport.page",
					description:
						"A simple, lightweight, and fast portfolio website generator.",
					tech: [
						"nextjs",
						"tailwindcss",
						"nestjs",
						"mongodb",
						"cloudflare",
						"nginx",
					],
					link: "https://fastport.page",
					image: "/assets/img/fastport.png",
				},
				{
					name: "AmongXSS",
					description:
						"A proof-of-concept (POC) project demonstrating XSS vulnerabilities in a humorous way.",
					tech: ["nextjs", "tailwindcss", "express"],
					link: "https://github.com/phat-lor/among-xss",
					image:
						"https://github.com/user-attachments/assets/655719a0-c92f-4e01-95b4-33ddb3af76ec",
				},
				{
					name: "phatlor.me",
					description:
						"My personal portfolio website. It's a work in progress.",
					tech: ["nextjs", "tailwindcss", "express"],
					link: "https://phatlor.me",
					image: "/assets/img/phatlor.png",
				},

				{
					name: "PattyNikko Framework",
					description:
						"A simple, lightweight, java web framework for web development created in 1 sitting.",
					tech: ["java"],
					link: "https://github.com/phat-lor/pattynikko-framework",
					image: "/assets/img/pattynikko.png",
				},
			],
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
		const education = port.about.education.education;

		education.forEach((edu) => {
			const li = document.createElement("li");
			li.classList.add("relative", "flex", "items-baseline", "gap-6", "pb-5");

			const div = document.createElement("div");
			div.classList.add(
				"before:absolute",
				"before:left-[5.5px]",
				"before:h-full",
				"before:w-[1px]",
				"before:bg-white"
			);
			div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-white" viewBox="0 0 16 16">
			<circle cx="8" cy="8" r="8" />
		</svg>`;
			li.appendChild(div);

			const div2 = document.createElement("div");
			const p1 = document.createElement("p");
			p1.classList.add("text-sm");
			p1.innerText = edu.time;
			div2.appendChild(p1);

			const p2 = document.createElement("p");
			p2.classList.add("mt-2", "text-sm");
			p2.innerText = edu.name;
			div2.appendChild(p2);

			const p3 = document.createElement("p");
			p3.classList.add("font-thin", "text-sm");
			p3.innerText = edu.description;
			div2.appendChild(p3);

			li.appendChild(div2);

			educationContent.appendChild(li);
		});

		const aboutContent = document.getElementById("about-content");
		const p = document.createElement("p");
		p.innerText = port.about.description;
		aboutContent.appendChild(p);

		const aboutWorkExp = document.getElementById("about-work-content");
		const workExp = port.about.workExp.workExp;
		// just like the education timeline
		workExp.forEach((exp) => {
			const li = document.createElement("li");
			li.classList.add("relative", "flex", "items-baseline", "gap-6", "pb-5");

			const div = document.createElement("div");
			div.classList.add(
				"before:absolute",
				"before:left-[5.5px]",
				"before:h-full",
				"before:w-[1px]",
				"before:bg-white"
			);

			div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-white" viewBox="0 0 16 16">
			<circle cx="8" cy="8" r="8" />
		</svg>`;

			li.appendChild(div);

			const div2 = document.createElement("div");
			const p1 = document.createElement("p");
			p1.classList.add("text-sm");
			p1.innerText = exp.time;
			div2.appendChild(p1);

			const p2 = document.createElement("p");
			p2.classList.add("mt-2", "text-sm");
			p2.innerText = exp.name;
			div2.appendChild(p2);

			const p3 = document.createElement("p");
			p3.classList.add("font-thin", "text-sm");
			p3.innerText = exp.description;
			div2.appendChild(p3);

			li.appendChild(div2);

			aboutWorkExp.appendChild(li);

			const projectsContent = document.getElementById("projects-content");
			const projects = port.project.projects;
			projectsContent.innerHTML = "";

			projects.forEach((project) => {
				console.log(project);
				createProject(project);
			});

			function createProject(project) {
				console.log("createProject");
				const div = document.createElement("div");
				div.classList.add(
					"overflow-hidden",
					"rounded-lg",
					"shadow",
					"w-full",
					"h-96",
					"border",
					"border-[#FFFFFF08]/10",
					"min-w-[300px]",
					"backdrop-filter",
					"backdrop-blur-lg",
					"bg-gray-300",
					"bg-opacity-5",
					"flex",
					"flex-col"
				);

				const div2 = document.createElement("div");
				div2.classList.add(
					"px-4",
					"py-5",
					"sm:p-6",
					"gap-2",
					"flex",
					"flex-col",
					"flex-grow"
				);

				const img = document.createElement("img");
				img.src = project.image;
				img.alt = project.name;
				img.classList.add(
					"w-full",
					"object-cover",
					"rounded-lg",
					"flex-shrink-0",
					"h-44"
				);
				div2.appendChild(img);

				const h2 = document.createElement("h2");
				h2.innerText = project.name;
				h2.classList.add("font-bold");
				div2.appendChild(h2);

				const p = document.createElement("p");
				p.innerText = project.description;
				p.classList.add("text-sm", "flex-grow", "h-20", "overflow-y-auto");
				div2.appendChild(p);

				const div3 = document.createElement("div");
				div3.classList.add("flex", "justify-between", "items-center");

				const div4 = document.createElement("div");
				div4.classList.add("grid", "grid-cols-9", "gap-2");

				project.tech.forEach((tech) => {
					const img = document.createElement("img");
					img.src = `https://skillicons.dev/icons?i=${tech}`;
					img.alt = tech;
					img.classList.add("w-7", "h-7");
					div4.appendChild(img);
				});

				div3.appendChild(div4);

				const a = document.createElement("a");
				a.classList.add("hover:text-blue-500", "duration-300");
				a.setAttribute("onclick", `window.open('${project.link}', "_blank")`);
				a.innerHTML = `<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-external-link"
				>
					<path d="M15 3h6v6" />
					<path d="M10 14 21 3" />
					<path
						d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
					/>
				</svg>`;
				div3.appendChild(a);

				div3.appendChild(a);

				div2.appendChild(div3);
				div.appendChild(div2);

				projectsContent.appendChild(div);
			}
		});

		const socialsContent = document.getElementById("about-socials");
		const socials = port.about.socials.socials;

		socials.forEach((social) => {
			const a = document.createElement("a");
			a.href = social.link;
			a.target = "_blank";
			a.classList.add("flex", "items-center", "gap-2", "h-fit");
			a.innerHTML = `<img src="${social.icon}" alt="${social.name}" class="w-7 h-7" />
				<p>${social.name}</p>`;
			socialsContent.appendChild(a);
		});

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
