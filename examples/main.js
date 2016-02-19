var AFRAME = require("aframe-core");
var drawComponent = require("aframe-draw-component").component;
var textwrapComponent = require("../index.js").component;
AFRAME.registerComponent("draw", drawComponent);
AFRAME.registerComponent("textwrap", textwrapComponent);
window.setTimeout(function() {
	document.querySelector("#box").setAttribute("textwrap", "text", "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
}, 2000);
