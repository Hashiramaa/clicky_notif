window.addEventListener('DOMContentLoaded', () => {
    const notif  = document.createElement('span');
    const sound  = document.getElementById('notifSound');
    const avatar = document.querySelector('.clicky_cont img');
    const widget = document.querySelector('.clicky_cont .widget_cont');
    const buttonCont = document.querySelector('.clicky_cont .button_cont');
    //
    let wasWidgetOpened = false;
    let isWidgetOpen    = false;
    //
    function openWidget(){
        widget.classList.add('open'); 
        notif.classList.remove('show');
        avatar.classList.remove('attention');
        wasWidgetOpened = true;
        isWidgetOpen    = true;
    }
    function closeWidget(){
        widget.classList.remove('open');
        isWidgetOpen   = false;
    }
    //
    setTimeout(() => {
        if(!wasWidgetOpened){
            notif.className = 'notification show';
            notif.textContent = 'Need help? Click me!';
            buttonCont.insertBefore(notif, avatar);
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
    [avatar, notif].forEach(e => {
        e.addEventListener('click', () => {
            if (widget) {
                if(isWidgetOpen){
                    closeWidget();
                }else{
                    openWidget();
                }
            }
        }) 
    });
    /*
    widget.addEventListener('click', () => {
        if (widget) {
            closeWidget();
        }
    })
    */
});
