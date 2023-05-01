const newUsername = prompt("What username would you like to give everyone?"); 
const newPfpUrl = prompt("What is the URL of your new profile pictures?");

const badges = [    "Ankh",    "Big Spender",    "Booster",    "OG",    "Owner",    "Plus",    "Staff",    "Tester",    "Verified"];

const badgeImgs = badges.map(badge => `<img src="/content/badges/${badge}.png" class="styles__chatBadge___AZ1ZU-camelCase">`).join("");

document.querySelectorAll(".styles__chatAvatar___RZQ83-camelCase").forEach(img => {
    img.src = newPfpUrl;
});

document.querySelectorAll(".styles__chatName___F1Z4P-camelCase").forEach(name => {
    name.innerHTML = `<text style="text-shadow: 0 3px 3px rgba(0, 0, 0, 0.2); color: #FF757E; background: linear-gradient(to right, #FF757E, #FF977E, #FFB97E, #FFDB7E, #FFFF7E); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${newUsername}</text>${badgeImgs}`;
});
