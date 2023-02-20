const Fontmin = require("fontmin");
const text = require("./chars");

const fontmin = new Fontmin()
  .src("fonts/*.ttf")
  .use(Fontmin.glyph({ text })) // 压缩ttf
  .use(Fontmin.ttf2woff2()) // ttf转woff2
  .dest("dist"); // 输出到dist目录

fontmin.run(function (err, files) {
  if (err) {
    console.log("⭐err==>", err);
    throw err;
  }
});
