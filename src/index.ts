const root = document.querySelector("#root");
const navList: string[] = ["alphabet", "/pages/flex_panel", "clock"];
const navbar: HTMLElement = document.createElement("div");
const homeNav: HTMLAnchorElement = document.createElement("a");
homeNav.textContent = "Home";
homeNav.href = "/dist";
homeNav.style.textDecoration = "none";
homeNav.style.marginLeft = "50px";
homeNav.style.color = "white";
navbar.append(homeNav);
const navs = document.createElement("div");
navList.map((navLink: string) => {
	const nav = document.createElement("a");
	nav.href = `/dist/${navLink}.html`;
	nav.textContent =navLink.lastIndexOf("/")? navLink.slice(navLink.lastIndexOf("/")) : navLink;
	nav.style.textDecoration = "none";
	nav.style.margin = "0 10px";
  nav.style.color = "white";
	navs.append(nav);
});
navs.style.padding = "0 50px";
navbar.append(navs);
navbar.classList.add("navbar");
root.append(navbar);

