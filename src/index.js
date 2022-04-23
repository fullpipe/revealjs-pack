import Reveal from "reveal.js";

import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealSearch from "reveal.js/plugin/search/search";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealZoom from "reveal.js/plugin/zoom/zoom";
import RevealMath from "reveal.js/plugin/math/math";
import Plantuml from "./plantuml";
import Pdfprint from "./pdfprint";

import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";

const div = document.createElement("div");
div.classList = "reveal";

div.innerHTML = `<div class="slides">
<section
    data-markdown="SLIDES.md"
    data-separator="\r?\n---\r?\n"
    data-separator-vertical="\r?\nvvv\r?\n"
    data-separator-notes="^notes?:"
></section>
</div>`;

document.body.appendChild(div);

let deck = new Reveal({
  plugins: [
    RevealMarkdown,
    RevealHighlight,
    RevealSearch,
    RevealNotes,
    RevealZoom,
    RevealMath,
    Plantuml,
    Pdfprint,
  ],
  showNotes: false,
});

deck.initialize();
