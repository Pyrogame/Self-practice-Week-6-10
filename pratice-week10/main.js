document.addEventListener("DOMContentLoaded", function() {
    //localStorage
      const bg = localStorage.getItem("bgColor");
      const font = localStorage.getItem("fontColor");
      const size = localStorage.getItem("fontSize");

      if (bg) {
        document.body.style.backgroundColor = bg;
        document.getElementById("bgColor").value = bg;
      }

      if (font) {
        document.body.style.color = font;
        document.getElementById("fontColor").value = font;
      }

      if (size) {
        document.body.style.size = size;
        document.getElementById("fontSize").value = size;
      }
    });
    //save
      document.getElementById("saveBtn").addEventListener("click", function() {
      const bgColor = document.getElementById("bgColor").value;
      const fontColor = document.getElementById("fontColor").value;
      const fontSize = document.getElementById("fontSize").value;

      localStorage.setItem("bgColor", bgColor);
      localStorage.setItem("fontColor", fontColor);
      localStorage.setItem("fontSize", fontSize);

      document.body.style.backgroundColor = bgColor;
      document.body.style.color = fontColor;
      document.body.style.fontSize = fontSize;
    });
    //reset
    document.getElementById("resetBtn").addEventListener("click", function() {
    localStorage.clear();
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    document.body.style.fontSize = "";
  });