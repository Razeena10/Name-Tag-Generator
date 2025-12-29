window.onload = function () {
    loadTags();
};
function createTag() {
    var name = document.getElementById("nameInput").value;
    if (name === "") {
        alert("Enter name");
        return;
    }
    var count = localStorage.getItem("count");
    if (count === null) {
        count = 0;
    }
    localStorage.setItem("tag_" + count, name);
    localStorage.setItem("count", Number(count) + 1);
    document.getElementById("nameInput").value = "";
    loadTags();
}
function loadTags() {
    var container = document.getElementById("tagsContainer");
    container.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        if (key.startsWith("tag_")) {
            var name = localStorage.getItem(key);

            container.innerHTML += `
                <div class="tag">
                    <span class="close" onclick="deleteTag('${key}')">&times;</span>
                    <small>Hello my name is</small>
                    <h3>${name}</h3>
                </div>
            `;
        }
    }
}
function deleteTag(key) {
    localStorage.removeItem(key);
    loadTags();
}
