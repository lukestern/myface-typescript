document.addEventListener('DOMContentLoaded', function() {
    const randomButton = document.getElementById("random-colour-button");
    if (randomButton){
        randomButton.addEventListener('click', _ => {
            const posts = getAllPosts();
            for (let element of posts) {
                changeBackgroundColour(element);
            };
        })
    }

    function getAllPosts() {
        return document.getElementsByClassName("post-listing");
    }

    function changeBackgroundColour(element) {
        element.style.background = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`;
    }

    const menuButton = document.getElementById("menu-button");

    menuButton.addEventListener('click', _ => {
        document.getElementById("menu-container").style.display = "flex";
        document.getElementById("page-container").style.filter = "blur(5px)";
        document.getElementsByClassName("page-container")[0].style.filter = "blur(5px)";
    })

    const closeButton = document.getElementById("close-button");

    closeButton.addEventListener('click', _ => {
        document.getElementById("menu-container").style.display = "none";
        document.getElementById("page-container").style.filter = "blur(0)";
        document.getElementsByClassName("page-container")[0].style.filter = "blur(0)";
    })
});