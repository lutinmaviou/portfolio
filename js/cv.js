const cvDiv = document.getElementById('myCv');
const img = document.getElementById('cv');
const showCv = document.getElementById('show-cv');
const hideCv = document.getElementById('close-cv');

function show() {
    img.style.display = "block";
    hideCv.style.display = "inline-block";
    cvDiv.style.backgroundColor = "#2c3e50";
}

function hide() {
    img.style.display = "none";
    hideCv.style.display = "none";
    cvDiv.style.background = "none";
}

showCv.onclick = show;
hideCv.onclick = hide;