var gulp=require('gulp');

// var sass=require("gulp-sass");

gulp.task("copyHTML",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei"));
});

gulp.task("copyCSS",function(){
	gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\css"));
});

gulp.task("copyJS",function(){
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\js"));	
});

gulp.task("copyIMG",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\img"));
});
gulp.task("copyIMG",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\img\\shoplist_img"));
});
gulp.task("copyIMG",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\img\\shopgwc_img"));
});
// gulp.task("copyIMG",function(){
// 	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\img1"));
// });

gulp.task("copyPHP",function(){
	gulp.src("php/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\php"));
});

// // gulp.task("copySASS",function(){
// // 	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\css"));
// // });

// // gulp.task("copyFONT",function(){
// // 	gulp.src("font/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\font"));
// // });

gulp.task("build",["copyHTML","copyCSS","copyJS","copyIMG","copyPHP"],function(){
	console.log("ok");
});


gulp.task("watchall",function(){
	gulp.watch("*.html",["copyHTML"]);
	gulp.watch("css/**/*",["copyCSS"]);
	gulp.watch("js/**/*",["copyJS"]);
	gulp.watch("img/**/*",["copyIMG"]);
	gulp.watch("font/**/*",["copyPHP"]);
});