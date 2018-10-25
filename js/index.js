//nuevo objeto
const xhttp = new XMLHttpRequest();

// const url = `https://swapi.co/api/planets/`

const pedirData = url => {
    // url de data

    // método que trae la información
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Respuesta del servidor

            //llamar a la función que muestra la data que trajimos con
        }
    };

    //Inicio de petición de datos
    xhttp.open("GET", url, true);
    xhttp.send();
}

let nroRandom = funcionQueGeneraElNroRandom();
let urlDePlanetas = 'lksdjalskjdalksjdlaskdjklasd';
let urlPosta = `${urlDePlanetas}${nroRandom}`

pedirData(urlPosta);

function mostrarData() {

}

const botonRandom = document.getElementById("button");

botonRandom.addEventListener("click", function () {
    // llamar a una funcion que genere un nro random
});