var skills=["img/npm.png","img/git.png","img/gulp.png","img/es6.png","img/webpack.png","img/jquery.png","img/ajax.png","img/json.png","img/sass.png","img/html5.png","img/css3.png","img/php.png","img/photoshop.png","img/photoshop.png","img/photoshop.png","img/photoshop.png"],skills_link=document.getElementById("skills");function loadSkills(){for(var i=0;i<skills.length;i++){var g=document.createElement("div"),s=document.createElement("img");g.classList.add("col-md-3","col-sm-3"),s.src=skills[i],s.classList.add("img-responsive"),g.appendChild(s),skills_link.appendChild(g)}}skills_link.innerHTML="",loadSkills();