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

downloadBtn.addEventListener(
"click",
()=>{

alert(
"현재 버전에서는 HTML 다운로드 기능이 간단 버전입니다."
);

});

updatePreview();
