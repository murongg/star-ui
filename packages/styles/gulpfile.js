// copy from element-plus

const chalk = require('chalk')
const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const dartSass = require('sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

const path = require('path')

const noPrefixFile = /(index)/

const sass = gulpSass(dartSass)
const distFolder = './lib'

/**
 * compile styles scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function compile() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, details => {
        console.log(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000,
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`,
        )
      }),
    )
    .pipe(
      rename(path => {
        if (!noPrefixFile.test(path.basename)) {
          path.basename = `star-${path.basename}`
        }
      }),
    )
    .pipe(gulp.dest(distFolder))
}

function compileTransitions() {
  return gulp
    .src('./src/transitions/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, details => {
        console.log(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000,
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`,
        )
      }),
    )
    .pipe(gulp.dest(distFolder + '/transitions'))
}

/**
 * copy font to lib/fonts
 * @returns
 */
function copyFont() {
  return gulp.src('./src/fonts/**').pipe(gulp.dest(`${distFolder}/fonts`))
}

/**
 * copy to packages/lib/styles
 */
function copyToLib() {
  return gulp
    .src(distFolder + '/**')
    .pipe(gulp.dest(path.resolve(__dirname, '../../lib/styles')))
}

const build = gulp.series(compile, compileTransitions, copyFont, copyToLib)
exports.build = build
exports.default = build
