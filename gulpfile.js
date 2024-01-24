const { src, dest, watch, series } = require("gulp");
const pug = require("gulp-pug");

function buildTemplates() {
  return src("./src/templates/*.pug").pipe(pug()).pipe(dest("./dist"));
}

function watchTask() {
  watch(["./src/*.pug"], buildTemplates);
}

exports.default = series(buildTemplates, watchTask);
