# reveal.js all in one

reveal.js slides for markdown. 

Contains:
 - Markdown
 - Highlight
 - Search
 - Notes
 - Zoom
 - Math
 - Plantuml
 - Pdfprint

## Usage 

```bash
docker run --rm -it -p 8787:80 -v `pwd`/example/SLIDES.md:/public/SLIDES.md docker.io/fullpipe/revealjs-pack
```

### Action keys

| Key | Action              |
| --- | -----------         |
| `O` | Overview mode       |
| `P` | Open PDF version    |
| `S` | Speaker view        |
