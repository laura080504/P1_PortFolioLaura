document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById('formulario-contacto');
    const modal = document.getElementById('modal-exito');
    const btnCerrar = document.getElementById('cerrar-modal');
    const btnTema = document.getElementById('toggle-tema');
    const iconoTema = document.getElementById('icono-tema');

    if (formulario && modal) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault(); 
            modal.showModal();
            formulario.reset(); 
        });
    }

    if (btnCerrar) {
        btnCerrar.addEventListener('click', () => {
            modal.close();
        });
    }
    

    if (localStorage.getItem('tema') === 'oscuro') {
        document.body.classList.add('dark-mode');
        if (iconoTema) iconoTema.textContent = 'light_mode';
    }

    if (btnTema) {
        btnTema.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('tema', 'oscuro');
                iconoTema.textContent = 'light_mode';
            } else {
                localStorage.setItem('tema', 'claro');
                iconoTema.textContent = 'dark_mode';
            }
        });
    }
});