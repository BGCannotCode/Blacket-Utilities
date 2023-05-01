javascript:(function() {
    var username = prompt("Enter the new username: ");
    var pfp = prompt("Enter the image URL for the new profile picture: ");

    var chatNames = document.getElementsByClassName("styles__chatName___F1Z4P-camelCase");
    for (var i = 0; i < chatNames.length; i++) {
        var name = chatNames[i];
        var badges = name.getElementsByTagName("img");
        while (badges.length > 0) {
            badges[0].parentNode.removeChild(badges[0]);
        }

        name.style.color = "white";
        name.style.textShadow = "0 3px 3px rgba(0, 0, 0, 0.2)";
        name.innerHTML = "<span style='background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>" + username + "</span>";
        
        var pfpElement = name.previousElementSibling;
        pfpElement.setAttribute("src", pfp);
        
        var badgesHTML = "<img src='/content/badges/Ankh.png' class='styles__chatBadge___AZ1ZU-camelCase'><img src='/content/badges/OG.png' class='styles__chatBadge___AZ1ZU-camelCase'><img src='/content/badges/Owner.png' class='styles__chatBadge___AZ1ZU-camelCase'><img src='/content/badges/Plus.png' class='styles__chatBadge___AZ1ZU-camelCase'><img src='/content/badges/Staff.png' class='styles__chatBadge___AZ1ZU-camelCase'><img src='/content/badges/Tester.png' class='styles__chatBadge___AZ1ZU-camelCase'><img src='/content/badges/Verified.png' class='styles__chatBadge___AZ1ZU-camelCase'><img src='https://media.discordapp.net/attachments/1036199159969103872/1102637372945993798/image-removebg-preview_27.png?width=645&height=603' class='styles__chatBadge___AZ1ZU-camelCase'>";
        name.innerHTML += badgesHTML;
    }
})();
