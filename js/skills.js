var skills =["img/npm.png","img/git.png","img/gulp.png","img/es6.png","img/webpack.png","img/jquery.png","img/ajax.png","img/json.png","img/sass.png","img/html5.png","img/css3.png","img/php.png","img/photoshop.png","img/photoshop.png","img/photoshop.png","img/photoshop.png"];

var skills_link = document.getElementById('skills');
 
 
skills_link.innerHTML="";

function loadSkills(){
for(var i=0; i < skills.length;i++){
	 
	var block_skill = document.createElement('div');
	var block_skill_img = document.createElement('img');
	block_skill.classList.add("col-md-3","col-sm-3");
	block_skill_img.src =skills[i];
	block_skill_img.classList.add('img-responsive');
	block_skill.appendChild(block_skill_img);
	skills_link.appendChild(block_skill);
}
} 




loadSkills();
