const quickLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/elene-ramishvili-a7b542174/",
    description: "Professional profile, role history, and networking contact point.",
    chip: "Open profile",
  },
  {
    title: "GitHub Repo",
    href: "https://github.com/test1111-sudo/MyResume",
    description: "Source code for this resume website, including the Netlify-ready static build.",
    chip: "Open repo",
  },
  {
    title: "ISTQB Certificate",
    href: "./assets/istqb-certificate.pdf",
    description: "Original certification PDF stored inside the project.",
    chip: "Open file",
  },
  {
    title: "Behance",
    href: "https://www.behance.net/eleneramishvili#",
    description: "Design portfolio from my graphic and UI/UX chapter.",
    chip: "See portfolio",
  },
];

const focusAreas = [
  "Functional testing",
  "Regression testing",
  "Smoke testing",
  "Exploratory testing",
  "API testing",
  "GUI testing",
  "Mobile testing",
  "Database validation",
  "Payment scenarios",
  "Release validation",
  "Requirements analysis",
  "Bug reporting",
];

const experiences = [
  {
    project: "Project 5",
    teamSize: "12 members",
    role: "QA Engineer",
    featured: true,
    summary:
      "Handled broad platform coverage with a strong focus on production confidence, third-party integrations, and payment recovery scenarios.",
    points: [
      "Conducted functional, regression, smoke, and exploratory testing to identify defects.",
      "Designed and executed test cases from user stories and release priorities.",
      "Collaborated daily with developers, the Product Owner, and another QA teammate to split scope cleanly.",
      "Tested refund, cancellation, retry payment, and integration flows across internal and third-party systems.",
      "Analyzed application logs and data inconsistencies to debug issues faster.",
    ],
    tools: ["Microsoft Azure", "Azure DevOps", "MS SQL", "Postman", "Swagger", "Jira"],
  },
  {
    project: "Project 4",
    teamSize: "4 members",
    role: "Manual QA Engineer",
    summary:
      "Worked in a smaller team with heavy ownership over planning, coverage strategy, device choice, and test documentation.",
    points: [
      "Created the overall testing strategy and selected devices for execution.",
      "Built checklists plus smoke and regression suites for repeatable coverage.",
      "Estimated QA tasks and aligned scope with the team.",
      "Reviewed requirements and designs in collaboration with BA and designer before execution.",
    ],
    tools: [
      "Android Studio",
      "TestRail",
      "Google Spreadsheets",
      "Jira",
      "iOS Native",
      "Android Native",
    ],
  },
  {
    project: "Project 3",
    teamSize: "20 members",
    role: "QA Engineer",
    summary:
      "Contributed to a larger mobile-focused team with strong defect communication, pair testing, and retest discipline.",
    points: [
      "Replicated bugs with developers and supported faster issue resolution.",
      "Performed mobile testing across Android and iOS with repeated retest cycles.",
      "Executed test cases, created test cycles, and joined pair-testing sessions.",
      "Kept communication tight with the development team to improve defect clarity.",
    ],
    tools: ["BrowserStack", "JIRA", "Confluence", "Zephyr", "Android Studio", "Xcode", "iOS", "Android"],
  },
  {
    project: "Project 2",
    teamSize: "20 members",
    role: "QA Engineer",
    summary:
      "Covered API, database, and data-validation paths in addition to regular release testing and bug documentation.",
    points: [
      "Created Zephyr test cases with strong coverage of application functionality.",
      "Tested APIs in Postman and verified request-response structures.",
      "Validated database operations in MS SQL and reviewed Cosmos DB chat history.",
      "Ran smoke and regression testing around releases and documented bugs in detail.",
    ],
    tools: ["JIRA", "Confluence", "Zephyr", "Postman", "MSSQL", "Azure"],
  },
  {
    project: "Project 1",
    teamSize: "15 members",
    role: "QA Engineer",
    summary:
      "Built a strong manual QA base around requirement investigation, Scrum participation, functional coverage, and API plus GUI testing.",
    points: [
      "Partnered with BA and developers early to prevent defects before implementation hardened.",
      "Participated in estimations, prioritization, and Scrum events.",
      "Designed, prioritized, executed, and maintained test cases and test sets.",
      "Handled functional, regression, exploratory, GUI, and API testing while reporting defects clearly.",
    ],
    tools: ["JIRA", "TestRail", "Postman", "MySQL", "Figma", "Wiki", "Xcode", "Android Studio"],
  },
];

const toolGroups = [
  {
    title: "Test Management",
    items: ["Jira", "Azure DevOps", "TestRail", "Zephyr", "Confluence", "Wiki"],
  },
  {
    title: "API & Data",
    items: ["Postman", "Swagger", "MS SQL", "MySQL", "Cosmos DB", "Azure"],
  },
  {
    title: "Mobile & Devices",
    items: ["Android Studio", "Xcode", "BrowserStack", "iOS Native", "Android Native"],
  },
  {
    title: "Design Awareness",
    items: ["Figma", "Graphic Design", "UI/UX Thinking", "Visual Review", "Flow Clarity"],
  },
];

const learningTrack = [
  "Building automation skills with JavaScript and TypeScript in Playwright.",
  "Growing from manual depth into repeatable end-to-end test coverage.",
  "Exploring the basics of security and penetration testing with Kali Linux in a virtual machine.",
  "Keeping the design side active through portfolio work and interface critique.",
];

const hobbies = [
  "Traveling",
  "Skiing",
  "Hiking",
  "Camping",
  "Photography",
  "Metal music",
  "Animal lover",
  "Suburbs of Tbilisi",
];

const contacts = [
  {
    label: "Email",
    href: "mailto:eleneramishvili17@gmail.com",
    style: "primary",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/elene-ramishvili-a7b542174/",
    style: "secondary",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hellnnee/",
    style: "secondary",
  },
];

function renderQuickLinks() {
  const container = document.querySelector("#quick-links");
  container.innerHTML = quickLinks
    .map(
      (link) => `
        <a class="quick-link" href="${link.href}" ${link.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : 'target="_blank"'}>
          <strong>${link.title}</strong>
          <span>${link.description}</span>
          <span class="link-chip">${link.chip}</span>
        </a>
      `
    )
    .join("");
}

function renderPills(selector, items) {
  const container = document.querySelector(selector);
  container.innerHTML = items.map((item) => `<span class="pill">${item}</span>`).join("");
}

function renderExperience() {
  const container = document.querySelector("#experience-grid");
  container.innerHTML = experiences
    .map(
      (item, index) => `
        <article class="experience-card ${item.featured ? "featured" : ""}">
          <div class="experience-header">
            <div>
              <p class="eyebrow">${item.role}</p>
              <h3>${item.project}</h3>
              <p class="experience-copy">${item.summary}</p>
            </div>
            <div class="project-index">0${index + 1}</div>
          </div>
          <div class="meta-list">
            <span class="meta-item">${item.teamSize}</span>
            ${item.tools.slice(0, 3).map((tool) => `<span class="meta-item">${tool}</span>`).join("")}
          </div>
          <ul class="experience-points">
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderToolGroups() {
  const container = document.querySelector("#tool-groups");
  container.innerHTML = toolGroups
    .map(
      (group) => `
        <article class="tool-card">
          <h3>${group.title}</h3>
          <ul class="tool-list">
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderLearning() {
  const container = document.querySelector("#learning-list");
  container.innerHTML = learningTrack.map((item) => `<li>${item}</li>`).join("");
}

function renderContacts() {
  const container = document.querySelector("#contact-actions");
  container.innerHTML = contacts
    .map(
      (item) => `
        <a class="button button-${item.style}" href="${item.href}" target="${item.href.startsWith("mailto:") ? "_self" : "_blank"}" ${
          item.href.startsWith("mailto:") ? "" : 'rel="noreferrer"'
        }>
          ${item.label}
        </a>
      `
    )
    .join("");
}

renderQuickLinks();
renderPills("#focus-areas", focusAreas);
renderExperience();
renderToolGroups();
renderLearning();
renderPills("#hobbies", hobbies);
renderContacts();
