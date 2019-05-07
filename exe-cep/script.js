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
    })
    .catch((erro)=>{
        console.log(erro)
    })
})
