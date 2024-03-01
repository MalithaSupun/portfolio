// JavaScript for adding shaking effect to button letters
const getInTouchBtn = document.getElementById('get-in-touch-btn');

getInTouchBtn.addEventListener('mouseover', function() {
    this.classList.add('shaking');
});

getInTouchBtn.addEventListener('animationend', function() {
    this.classList.remove('shaking');
});


// JavaScript for adding shaking effect to button letters
const btnProject = document.getElementById('btn-project');

btnProject.addEventListener('mouseover', function() {
    this.classList.add('shaking');
});

btnProject.addEventListener('animationend', function() {
    this.classList.remove('shaking');
});

// JavaScript for adding shaking effect to button letters
const btnSkill = document.getElementById('btn-skill');

btnSkill.addEventListener('mouseover', function() {
    this.classList.add('shaking');
});

btnSkill.addEventListener('animationend', function() {
    this.classList.remove('shaking');
});

// JavaScript for adding shaking effect to button letters
const btnAbout = document.getElementById('btn-about');

btnAbout.addEventListener('mouseover', function() {
    this.classList.add('shaking');
});

btnAbout.addEventListener('animationend', function() {
    this.classList.remove('shaking');
});
