document.addEventListener('DOMContentLoaded', function() {
    const randomButton = document.getElementById("random-colour-button");
    
    randomButton.addEventListener('click', _ => {
        const posts = getAllPosts();
        for (let element of posts) {
            changeBackgroundColour(element);
        };
    } )

    function getAllPosts() {
        return document.getElementsByClassName("post-listing")
    }

    function changeBackgroundColour(element) {
        element.style.background = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`
    }
});