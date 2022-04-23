const plantuml = {
  id: "plantuml",
  init: (deck) => {
    deck.on("ready", () => {
      let encoder = require("plantuml-encoder");

      var config = deck.getConfig().plantuml || {};
      var server = config.serverPath || "//www.plantuml.com/plantuml/svg/";

      document
        .querySelectorAll(".reveal code.plantuml")
        .forEach(function (block) {
          let img = document.createElement("img");
          img.classList = "r-stretch";
          img.setAttribute("src", server + encoder.encode(block.innerText));

          let pre = block.parentElement;
          pre.parentNode.replaceChild(img, pre);
        });
    });
  },
};

export default plantuml;
