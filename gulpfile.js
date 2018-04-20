var gulp = require('gulp'),
	minifyCSS = require('gulp-csso'),
    uglify = require('gulp-uglify'),
	//browserSync = require('browser-sync'),
    sass = require('gulp-ruby-sass'),
	watch = require('gulp-watch'),
	imagemin = require('gulp-imagemin'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	autoprefixer = require('gulp-autoprefixer');
 
/*------------------------MIN CSS-------------------------------*/
gulp.task('css',function(){
	  return gulp.src('css/*.css')
	    .pipe(minifyCSS())
	    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('app/css/'))
	   // .pipe(browserSync.reload({stream: true}))
	    .pipe(livereload())
		.pipe(connect.reload());

});

gulp.task('sass', () =>{
    sass('css/style.scss')
        .on('error', sass.logError)
	    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'))
		  .pipe(livereload())
		.pipe(connect.reload());
		
		 
		  });

/*------------------------MIN CSS-------------------------------*/

/*------------------------HTML----------------------------------*/
gulp.task('html',function(){
	  return gulp.src('*.html')
		.pipe(gulp.dest('app/'))
	   // .pipe(browserSync.reload({stream: true}))
	    .pipe(livereload())
		.pipe(connect.reload());

});

/*------------------------HTML----------------------------------*/

/*------------------------FONTS----------------------------------*/
gulp.task('fonts',function(){
	  return gulp.src('fonts/*.*')
		.pipe(gulp.dest('app/fonts/'))
	   // .pipe(browserSync.reload({stream: true}))
	    .pipe(livereload())
		.pipe(connect.reload());

});

/*------------------------FONTS----------------------------------*/


/*------------------------MIN-IMAGES----------------------------*/
gulp.task('img',function(){
	gulp.src('img/*.*')
	   .pipe(imagemin({ 
         progressive: true,
         svgoPlugins: [{removeViewBox: false}],
         interlaced: true
        }))
       .pipe(gulp.dest('./app/img/'))
	   //.pipe(browserSync.reload({stream: true}))
	   .pipe(livereload())
	   .pipe(connect.reload());
	
	
	
});

/*------------------------MIN-IMAGES----------------------------*/
/*------------------------MIN JS---------------------------------*/
gulp.task('js', function(){
	return gulp.src('js/*.js')
	    .pipe(uglify())
	    .pipe(gulp.dest('app/js/'))
	   // .pipe(browserSync.reload({stream: true}))
	    .pipe(livereload())
		.pipe(connect.reload());

});

/*------------------------MIN JS---------------------------------*/

/*------------------------WATCH----------------------------------*/
gulp.task('watch', function(){
    watch('*.html', function(event, cb) {
        gulp.start('html');
    });
    watch('css/*.*', function(event, cb) {
        gulp.start('css');
    });
    watch('js/*.*', function(event, cb) {
        gulp.start('js');
    });
	/*
    watch('img/*.*', function(event, cb) {
        gulp.start('img');
    });*/
	watch('css/*.scss', function(event, cb) {
        gulp.start('sass');
    });
		watch('fonts/*.*', function(event, cb) {
        gulp.start('fonts');
    });
 
   
});

/*------------------------WATCH----------------------------------*/



/*------------------------ALL TASKS------------------------------*/
gulp.task('default',['css','html','img','js','sass','fonts']);
gulp.task('live',['watch','connect' ]);

/*------------------------ALL TASKS------------------------------*/



/*--------------------WEB-SERVER-------------------------*/
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});


gulp.task('webserver', function () {
	browserSync({
		server: {
		  baseDir: "app"
		},
		tunnel: true,
		host: 'localhost',
		port: 8000,
		logPrefix: "__"
	});
});
/*--------------------WEB-SERVER-------------------------*/