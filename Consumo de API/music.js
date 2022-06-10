const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".dato-container");
const API_URL ='https://www.songsterr.com';
button.addEventListener("click", (e) => {
    e.preventDefault();
    traerDatos(input.value);
});

function traerDatos(dato){
    fetch(`${API_URL}/a/ra/songs/byartists.json?artists=${dato}`)
    .then((res) => res.json())
    .then((data) => {
        crearDato(data);
    });
}

function crearDato(dato){
    const h3 = document.createElement('h3');
    console.log(dato);
    const tpl = dato.map((artist) => `<li>${artist.id} ♫ ${artist.title}</li>`);
    console.log(tpl);
    container.innerHTML=`<ul>${tpl}</ul>`
    h3.textContent = dato.id;

    const div = document.createElement('div');
    div.appendChild(h3);

    container.appendChild(div);
}
