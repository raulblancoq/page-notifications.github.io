const btnMark = document.getElementById('mark');
var comments = document.querySelectorAll('.unread');
var count = comments.length;
document.querySelector('.count').textContent = count;

btnMark.addEventListener('click', function markUnread(e){
    e.preventDefault();
    for (const element of comments) {
        element.classList.toggle('unread');
    }
    var count = document.querySelectorAll('.unread').length;
    document.querySelector('.count').textContent = count;
});

for (const comment of comments) {
    comment.addEventListener('click', () => {
        comment.classList.remove('unread');
        var count = document.querySelectorAll('.unread').length;
        document.querySelector('.count').textContent = count;
    });
}
