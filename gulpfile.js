const gulp = require("gulp");
const gulpSASS = require("gulp-sass");
const browserSync = require('browser-sync').create();

const sassFiles = [
    "./node_modules/bootstrap/scss/bootstrap.scss",
	"public/scss/*.scss"

];

const JsFiles = [
    "./node_modules/bootstrap/dist/js/bootstrap.min.js",
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/popper.js/dist/umd/popper.min.js"
];

gulp.task("sass", () => {
    gulp
        .src(sassFiles)
        .pipe(gulpSASS())
        .pipe(gulp.dest("./public/css/"))
        .pipe(browserSync.stream());
});

gulp.task("js", () => {
    gulp
        .src(JsFiles)
        .pipe(gulp.dest("./public/js/"))
        .pipe(browserSync.stream());
});
gulp.task("serve", ["sass"], () => {
    browserSync.init({
        server: "./public"
    });
    gulp.watch(sassFiles, ["sass"]);
    gulp.watch("public/*.html").on("change", browserSync.reload);
});

gulp.task("default", ["js", "serve"]);

