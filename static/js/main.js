document.addEventListener("DOMContentLoaded", function(){
  var toggle = document.getElementById("scheme-toggle");

  var scheme = "light";
  var savedScheme = localStorage.getItem("scheme");

  var container = document.getElementsByTagName("html")[0];
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    scheme = "dark";
  }

  if(savedScheme) {
    scheme = savedScheme;
  }

  if(scheme == "dark") {
    darkscheme(toggle, container);
  } else {
    lightscheme(toggle, container);
  }

  toggle.addEventListener("click", () => {
    if (toggle.className === "light") {
      darkscheme(toggle, container);
    } else if (toggle.className === "dark") {
      lightscheme(toggle, container);
    }
  });
});

function createfeathericon(icon) {
    var svgns = "http://www.w3.org/2000/svg";
    var xlinkns = "http://www.w3.org/1999/xlink";

    var svg = document.createElementNS(svgns, "svg");
    svg.setAttribute("class", "feather")
    var use = document.createElementNS(svgns, "use");
    use.setAttributeNS(xlinkns, "href", icon);
    svg.appendChild(use);
    console.log(svg);
    return svg;
}

function darkscheme(toggle, container) {
    localStorage.setItem("scheme", "dark");
    // toggle.innerHTML = feather.icons.sun.toSvg();
    toggle.innerHTML = "";
    toggle.appendChild(createfeathericon("/icons/feather-sprite.svg#sun"));
    toggle.className = "dark";
    container.className = "dark";
}

function lightscheme(toggle, container) {
    localStorage.setItem("scheme", "light");
    // toggle.innerHTML = feather.icons.moon.toSvg();
    toggle.innerHTML = "";
    toggle.appendChild(createfeathericon("/icons/feather-sprite.svg#moon"));
    toggle.className = "light";
    container.className = "";
}
