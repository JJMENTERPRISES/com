const phones = document.querySelectorAll('.phone');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    phones.forEach(phone => {
        const phoneTop = phone.getBoundingClientRect().top;

        if (phoneTop < triggerBottom) {
            phone.classList.add('show');
        } else {
            phone.classList.remove('show');
        }
    });
});
