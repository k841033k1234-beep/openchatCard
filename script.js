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
<meta name="viewport" content="width=device-width,initial-scale=1">

<title>${titleInput.value}</title>

<style>

body{
margin:0;
padding:20px;
background:#747b86;
font-family:sans-serif;
}

.card{
max-width:430px;
margin:auto;
background:white;
border-radius:24px;
overflow:hidden;
box-shadow:
0 2px 6px rgba(0,0,0,.08),
0 12px 24px rgba(0,0,0,.12);
}

.top{
background:#5e6671;
padding:16px;
}

.profile{
display:flex;
align-items:center;
gap:12px;
}

.profile img{
width:54px;
height:54px;
border-radius:50%;
object-fit:cover;
border:3px solid white;
}

.profile-name{
color:white;
font-weight:bold;
font-size:18px;
}

.banner{
width:100%;
display:block;
}

.content{
padding:24px;
}

.content h2{
font-size:30px;
font-weight:800;
margin-bottom:16px;
}

.content p{
white-space:pre-line;
line-height:1.7;
color:#666;
}

.stats{
display:flex;
gap:18px;
margin:20px 0;
color:#888;
font-weight:bold;
}

.button{
display:block;
padding:18px;
text-align:center;
background:#FEE500;
text-decoration:none;
color:black;
font-weight:bold;
border-radius:12px;
font-size:20px;
}

</style>
</head>
<body>

<div class="card">

<div class="top">

<div class="profile">

<img src="${previewProfile.src}">

<div class="profile-name">
${profileNameInput.value}
</div>

</div>

</div>

<img class="banner"
src="${previewBanner.src}">

<div class="content">

<h2>${titleInput.value}</h2>

<p>${descInput.value}</p>

<div class="stats">

<span>❤ ${likeInput.value}</span>

<span>💬 ${commentInput.value}</span>

<span>🔗 ${shareInput.value}</span>

</div>

<a
class="button"
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

const a = document.createElement("a");

a.href = URL.createObjectURL(blob);

a.download = "OpenChatCard.html";

document.body.appendChild(a);

a.click();

document.body.removeChild(a);

URL.revokeObjectURL(a.href);

});
