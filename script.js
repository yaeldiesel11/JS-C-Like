function add(likeButton) {
    var likeElement = likeButton.previousElementSibling;
    var count = parseInt(likeElement.innerText);
    count++;
    likeElement.innerText = count + " like(s)";
}
