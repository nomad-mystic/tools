const gulp = require('gulp');
const gulpUglify = require('gulp-uglify');
const _ = require('lodash');
const gulpImageMin = require('gulp-imagemin');

const gulpFunctions = (config) => {

    // console.log(config);

    /**
     * @description This will minify js scripts to a destination folder based on the file sent in
     * @returns {*}
     */
    const scripts = () => {
        if (!_.isEmpty(config.fullSourceFile) && _.includes(config.fullSourceFile, '.js')) {
            console.log(config);

            return gulp.src(config.fullSourceFile)
                .pipe(gulpUglify())
                .pipe(gulp.dest(config.fullDestFolder));
        }
    };

    const optimizeImages = () => {
        console.log('images function called');
	    console.log(config);
        if (!_.isEmpty(config.fullSourceFile)) {
            console.log(config);
            return gulp.src(`${config.fullSourceFile}/*`)
                .pipe(gulpImageMin())
                .pipe(gulp.dest(config.fullDestFolder));
        }
    };


    if (config.type === 'js') {
        scripts();
    } else if (config.type === 'images') {
        optimizeImages();
    }

};

module.exports = gulpFunctions;