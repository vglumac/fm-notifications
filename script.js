const button = document.querySelector('.header--button');
const info = document.querySelector('.header--info');

button.addEventListener('click', markAllAsRead);

function markAllAsRead() {
    const unread = document.querySelectorAll('.unread');
    unread.forEach(notification => notification.classList.remove('unread'));
    info.innerText = '0';
}