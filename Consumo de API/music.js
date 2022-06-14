const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".dato-container");
const API_URL ='https://www.songsterr.com';
button.addEventListener("click", async (e) => {
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
    console.log(dato);
    const tpl = dato.map((artist) => `<li>Id: ${artist.id} - ♫:  ${artist.title} - Banda: ${artist.artist.name}</li>`).join('');
    console.log(tpl.type);
    //const data= dato.map((artist) => `<li>${artist.value}</li>`);
    if (tpl.length ==0) {
        container.innerHTML=`<h1>No existen canciones con este artista</h1>`
    } else {
        container.innerHTML=`<ul>${tpl}</ul>`
        //container.innerHTML = `<ul>${data}</ul>`
    }
    console.log(tpl.length);
    
    
    const div = document.createElement('div');
    container.appendChild(div);
   
}
