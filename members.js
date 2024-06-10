function skillsMember() {
    // this function is called when the user clicks on the "Skills" button
    // in the "Members" view.
    // It lists all the skills of the selected member.
    // It also shows the member's name at the top of the view.
    // It also shows a "Back" button that allows the user to go back to the
    // "Members" view.
    var member = getSelectedMember();
    var skills = getSkillsByMember(member);
    var name = member.name;
    var skillsList = document.getElementById("skills");
    var back = document.getElementById("back");
    var title = document.getElementById("title");

    title.innerHTML = name + "'s Skills";
    back.style.display = "block";
    back.onclick = members;
    skillsList.innerHTML = "";

    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];
        var skillItem = document.createElement("li");
        skillItem.innerHTML = skill;
        skillsList.appendChild(skillItem);
    }
}