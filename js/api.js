
import * as UI from './interfaz.js'

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    async consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        // Acá va el Spinner
        UI.divResultado.innerHTML = '<div class="loader"></div>'
        //Metodo ASYNC/AWAIT
        try {
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const { lyrics } = resultado
            if (lyrics) {
                UI.divResultado.textContent = lyrics
                UI.headingResultado.textContent = `Cancion ${this.cancion.toUpperCase()} de ${this.artista.toUpperCase()}`
            } else {
                throw new Error('Cancion no encontrada')
            }
        } catch (error) {
            UI.divMensajes.textContent = error
            UI.divMensajes.classList.add('error')
            UI.divResultado.textContent = ' '
            setTimeout(() => {
                UI.divMensajes.textContent = ' '
                UI.divMensajes.classList.remove('error')
            }, 3000);
            console.error('Error del Catch: ', error);
        } finally {
            UI.divResultado.textContent = ' '

        }
    }








    // METODO FETCH
    /* fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            // console.log(resultado);
            const { lyrics } = resultado
            if (lyrics) {
                UI.divResultado.textContent = lyrics
                UI.headingResultado.textContent = `Cancion ${this.cancion.toUpperCase()} de ${(this.artista).toUpperCase()}`
            } else {
                UI.divMensajes.textContent = 'Canción Inexistente'
                UI.divMensajes.classList.add('error')
                UI.divResultado.textContent = ''
                setTimeout(() => {
                    UI.divMensajes.textContent = ''
                    UI.divMensajes.classList.remove('error')
                }, 3000);
            }
        })
} */
}

// Mostrar de mejor manera en el DOM y que al no cargar datos muestre los errores -----> Ok de 2 formas
// Mejorar el spinner -----> OK
// Utilizar async/await



export default API