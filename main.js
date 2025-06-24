window.addEventListener('DOMContentLoaded', () => {
    const notif = document.querySelector('.clicky_cont .notification');
    const sound = document.getElementById('notifSound');
    const avatar = document.querySelector('.clicky_cont img');
    const widget = document.querySelector('.clicky_cont .widget_cont');
    //
    let widgetOpened = false;
    //
    setTimeout(() => {
        if(!widgetOpened){
            if (notif) {
                notif.classList.add('show');
            }
            if (sound) {
                sound.play().catch(e => {
                    // Peut arriver si l'utilisateur n'a pas encore interagi avec la page
                    console.warn("Le son ne peut pas être joué automatiquement :", e);
                });
            }
            if (avatar) avatar.classList.add('attention');   
        }
    }, 3000); // 3000ms = 3 seconds
    //
    setTimeout(() => {
        notif.classList.remove('show');
        avatar.classList.remove('attention');
    }, 8000); // 3s in + 5s visible
    //
    avatar.addEventListener('click', () => {
        if (widget) {
            widget.classList.add('open'); 
            notif.classList.remove('show');
            avatar.classList.remove('attention');
            widgetOpened = true;
        }
    })
    widget.addEventListener('click', () => {
        if (widget) {
            widget.classList.remove('open');
        }
    })
});
