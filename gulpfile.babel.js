import config from "config";

import gulp from "gulp";
import browserSync from "browser-sync";
import del from "del";
import rename from "gulp-rename";
import concat from "gulp-concat";
import terser from "gulp-terser";
import sourcemaps from "gulp-sourcemaps";
import gnodemon from "gulp-nodemon";

// Template Import
import pugLinter from "gulp-pug-linter";

// CSS imports
import postcss from "gulp-postcss";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import precss from "precss";
import cssnano from "cssnano";

const server = browserSync.create();

//So that we can watch for changes in the gulpfile.  gulp.slurped = false;

const clean = () => del(["src/dest"]);

const paths = {
  main: "src/app.js",
  templates: {
    src: "src/templates/**/*.pug"
  },
  styles: {
    src: "src/public/css/main.css",
    watch: "src/public/css/**/*.css",
    dest: "src/dest/css/"
  },
  scripts: {
    src: "src/public/js/**/*.js",
    dest: "src/dest/js/"
  },
  images: {
    src: "src/public/img/**/*",
    dest: "src/dest/img/"
  },
  misc: {
    src: "src/public/misc/**.*",
    dest: "src/dest/"
  }
};

//Internal Functions
//
function nodemon(done) {
  const STARTUP_TIMEOUT = 5000;

  const server = gnodemon({
    script: paths.main,
    ext: "js pug html"
  });

  server.on("start", () => {
    setTimeout(done, STARTUP_TIMEOUT);
  });
}

//Templates
function templates() {
  return gulp
    .src(paths.templates.src)
    .pipe(pugLinter({ reporter: "default", failAfterError: true }));
}

////JS
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scripts.dest));
}

////CSS
function css() {
  var plugins = [
    postcssImport(),
    precss(),
    autoprefixer({
      path: ["src/public/css"]
    }),
    cssnano()
  ];

  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest));
}

function img() {
  return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest));
}

function misc() {
  return gulp.src(paths.misc.src).pipe(gulp.dest(paths.misc.dest));
}

function serve(done) {
  server.init({
    proxy: `http://${config.get("server-host")}:${config.get("server-port")}`,
    files: [paths.styles.dest],
    browser: "google chrome",
    port: config.get("browsersync-port")
  });

  done();
}

function reload(done) {
  server.reload();
  done();
}

function delayReload(done) {
  setTimeout(reload, 1000, done);
}

////Exported functions
function watch(done) {
  if (!gulp.slurped) {
    //Rerun our dev command
    gulp.watch("gulpfile.babel.js", gulp.series(dev));
    gulp.watch(paths.images.src, gulp.series(img, reload));
    gulp.watch(paths.scripts.src, gulp.series(scripts, reload));

    //Don't run reload on CSS as it's hot reloaded by BrowserSync.
    gulp.watch(paths.styles.watch, gulp.series(css));

    //Nodemon watches
    gulp.watch(paths.templates.src, gulp.series(templates, delayReload));
    gulp.slurped = true;
  }

  done();
}

////Build function
const build = gulp.series(
  clean,
  gulp.parallel(templates, css, scripts, img, misc)
);

////Deploy Function
//const deploy = gulp.series(build, ghDeploy);

//All functions that we export
export { build };

//Default function that we export
// const dev = gulp.series(
//   clean,
//   gulp.parallel(views, css, scripts, img, misc),
//   gulp.parallel(serve, watch)
// );

const dev = gulp.series(
  gulp.parallel(templates, css, scripts, img, misc),
  nodemon,
  gulp.parallel(serve, watch)
);

export default dev;
