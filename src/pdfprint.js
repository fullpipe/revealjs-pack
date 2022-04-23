const pdfprint = {
  id: "pdfprint",
  init: (deck) => {
    deck.addKeyBinding({ keyCode: 80, key: "P" }, () => {
      window.open(location.href + "?print-pdf");
    });
  },
};

export default pdfprint;
