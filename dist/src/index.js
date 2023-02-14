var root = document.querySelector("#root");
var navList = ["/pages/alphabet", "/pages/flex_panel", "/pages/clock", "/pages/search", "/pages/canvas", "/pages/checkbox", "/pages/video", "/pages/scroll", "/pages/orders"];
var navbar = document.createElement("div");
var homeNav = document.createElement("a");
homeNav.textContent = "Home";
homeNav.href = "/dist/";
homeNav.style.textDecoration = "none";
homeNav.style.marginLeft = "50px";
homeNav.style.color = "white";
navbar.append(homeNav);
var navs = document.createElement("div");
navList.map(function (navLink) {
    var nav = document.createElement("a");
    nav.href = "/dist".concat(navLink, ".html");
    var link = navLink.lastIndexOf("/") ? navLink.slice(navLink.lastIndexOf("/") + 1) : navLink;
    nav.textContent = link[0].toUpperCase() + link.slice(1);
    nav.style.textDecoration = "none";
    nav.style.margin = "0 10px";
    nav.style.color = "white";
    navs.append(nav);
});
navs.style.padding = "0 50px";
navbar.append(navs);
navbar.classList.add("navbar");
root.append(navbar);
//# sourceMappingURL=index.js.map