<<<<<<< HEAD
const cep = document.getElementById("cep");
console.log(cep.value)
cep.addEventListener("focusout", () =>{
    
    fetch('https://viacep.com.br/ws/'+ cep.value +'/json/')
    .then((response) =>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
        const estado = document.getElementById('estado');
        estado.value = data.uf

        const cidade = document.getElementById('cidade');
        cidade.value = data.localidade

        const bairro = document.getElementById('bairro');
        bairro.value = data.bairro

        const endereco = document.getElementById('endereço');
        endereco.value = data.logradouro
=======
//pegando elemento #cep HTML
const cep = document.getElementById("cep");

//
cep.addEventListener("focusout", () =>{
    console.log("FOCUS OUT")

    //escrevendo no console valor do CEP
    let cepVal = cep.value

    fetch(`https://viacep.com.br/ws/${cepVal}/json`)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data)
        console.log(data.cep)
        document.getElementById("estado").value = data.uf;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("endereco").value = data.logradouro;
>>>>>>> 0087807e6b8268546e87a94daafd70f9543d6307
    })
    .catch((erro)=>{
        console.log(erro)
    })
<<<<<<< HEAD
})
=======
})
>>>>>>> 0087807e6b8268546e87a94daafd70f9543d6307
