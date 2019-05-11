const enviar = document.getElementById("enviar")
botao.addEventListener("click", (evento) => {
    evento.preventDefault()
    console.log("click");

    const app = document.getElementById('root');
    const quadro=document.getElementById("container")
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const movie = document.getElementById("movie").value
    console.log(movie)
    const img = document.getElementById("img").value

    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=974d1769`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            data.Search.forEach(filme => {
            const card = document.createElement('div');
            card.setAttribute('class', 'box');
            container.setAttribute("class","movies")
            container.appendChild(card);

        let titulo = document.createElement("h2");
         titulo.textContent =filme.Title;
         

         let tipo = document.createElement('h3');
         tipo.textContent = filme.Type
        
         
         let image = document.createElement('img');
        image.src = filme.Poster


        card.appendChild(image)
        card.appendChild(tipo)
        card.appendChild(titulo); 

        container.appendChild(card);
        quadro.appendChild(container)

            })
        })
        .catch((erro) => {
            console.log(erro)
        })
})