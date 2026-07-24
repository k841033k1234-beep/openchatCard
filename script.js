const bannerInput = document.getElementById("bannerInput");
const profileInput = document.getElementById("profileInput");

const profileNameInput =
document.getElementById("profileNameInput");

const titleInput =
document.getElementById("titleInput");

const descInput =
document.getElementById("descInput");

const likeInput =
document.getElementById("likeInput");

const commentInput =
document.getElementById("commentInput");

const shareInput =
document.getElementById("shareInput");

const buttonInput =
document.getElementById("buttonInput");

const linkInput =
document.getElementById("linkInput");

const downloadBtn =
document.getElementById("downloadBtn");

const previewBanner =
document.getElementById("previewBanner");

const previewProfile =
document.getElementById("previewProfile");

const previewProfileName =
document.getElementById("previewProfileName");

const previewTitle =
document.getElementById("previewTitle");

const previewDesc =
document.getElementById("previewDesc");

const previewLike =
document.getElementById("previewLike");

const previewComment =
document.getElementById("previewComment");

const previewShare =
document.getElementById("previewShare");

const previewButton =
document.getElementById("previewButton");

function saveData(){

localStorage.profileName =
profileNameInput.value;

localStorage.title =
titleInput.value;

localStorage.desc =
descInput.value;

localStorage.like =
likeInput.value;

localStorage.comment =
commentInput.value;

localStorage.share =
shareInput.value;

localStorage.button =
buttonInput.value;

localStorage.link =
linkInput.value;

}

function updatePreview(){

previewProfileName.textContent =
profileNameInput.value;

previewTitle.textContent =
titleInput.value;

previewDesc.textContent =
descInput.value;

previewLike.textContent =
"❤ " + likeInput.value;

previewComment.textContent =
"💬 " + commentInput.value;

previewShare.textContent =
"🔗 " + shareInput.value;

previewButton.textContent =
buttonInput.value;

previewButton.href =
linkInput.value;

saveData();

}

[
profileNameInput,
titleInput,
descInput,
likeInput,
commentInput,
shareInput,
buttonInput,
linkInput

].forEach(input=>{

input.addEventListener(
"input",
updatePreview
);

});

bannerInput.addEventListener(
"change",
e=>{

const file =
e.target.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload = ()=>{

previewBanner.src =
reader.result;

localStorage.banner =
reader.result;

};

reader.readAsDataURL(file);

});

profileInput.addEventListener(
"change",
e=>{

const file =
e.target.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload = ()=>{

previewProfile.src =
reader.result;

localStorage.profile =
reader.result;

};

reader.readAsDataURL(file);

});

window.onload = ()=>{

if(localStorage.profileName)
profileNameInput.value =
localStorage.profileName;

if(localStorage.title)
titleInput.value =
localStorage.title;

if(localStorage.desc)
descInput.value =
localStorage.desc;

if(localStorage.like)
likeInput.value =
localStorage.like;

if(localStorage.comment)
commentInput.value =
localStorage.comment;

if(localStorage.share)
shareInput.value =
localStorage.share;

if(localStorage.button)
buttonInput.value =
localStorage.button;

if(localStorage.link)
linkInput.value =
localStorage.link;

if(localStorage.banner)
previewBanner.src =
localStorage.banner;

if(localStorage.profile)
previewProfile.src =
localStorage.profile;

updatePreview();

};

downloadBtn.addEventListener("click", () => {

const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${titleInput.value}</title>

<style>
body{
font-family:sans-serif;
background:#f2f2f2;
padding:20px;
}

.card{
max-width:430px;
margin:auto;
background:white;
border-radius:20px;
overflow:hidden;
box-shadow:0 5px 20px rgba(0,0,0,.15);
}

.banner{
width:100%;
display:block;
}

.content{
padding:20px;
}

.button{
display:block;
padding:15px;
background:#FEE500;
text-align:center;
text-decoration:none;
font-weight:bold;
color:black;
border-radius:12px;
}
</style>

</head>
<body>

<div class="card">

<img class="banner" src="${previewBanner.src}">

<div class="content">

<h2>${titleInput.value}</h2>

<p>${descInput.value}</p>

<a class="button"
href="${linkInput.value}">
${buttonInput.value}
</a>

</div>

</div>

</body>
</html>
`;

const blob = new Blob(
[html],
{type:"text/html"}
);

const a =
document.createElement("a");

a.href =
URL.createObjectURL(blob);

a.download =
"card.html";

a.click();

});
