document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    if (Cookies.enabled) {
        if (Cookies.get('cookiesaceptadas') != 'aceptadas') {
            launchCookieAdvisor('Tienes que aceptar las cookies');
        }
    } else {
        launchCookieAdvisor('Tu navegador no acepta cookies. Activa melón');
    }
}

function launchCookieAdvisor(msg) {
    var capaCookies = document.createElement('div');
    capaCookies.innerHTML = '<p>' + msg + '<span id="botonaceptar">ACEPTAR</span></p>';
    capaCookies.classList.add('avisoCookies');
    var todosLosSpanEnDiv = capaCookies.getElementsByTagName('span');
    todosLosSpanEnDiv.item(0).addEventListener('click', function() {
        if (Cookies.enabled) {
            Cookies.set('cookiesaceptadas', 'aceptadas', { expires: 60 * 60 * 24 * 365 * 2 })
        }
        //capaCookies.remove();
        $(capaCookies).fadeOut(5000);

    });

    document.body.appendChild(capaCookies);

}


//notacion de objeto es una manera de escribir objetos por sus valores de manera literal
// var miObjeto = {
//     llave: 'valor',
//     edad: 34,
//     casado: true,
//     titulacion: {
//         universidad: 'complutense',
//         ano: 2008,
//         lugar: 'Madrid'
//     }
// }