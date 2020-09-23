var clientes = document.querySelectorAll(".cliente");

var botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var email = form.email.value;
    var cpf = form.cpf.value;
    var telefone = form.telefone.value;
    var cep = form.cep.value;
    var logradouro = form.logradouro.value;
    var numero = form.numero.value;
    var bairro = form.bairro.value;
    var cidade = form.cidade.value;
    var estado = form.estado.value;

    var clienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var emailTd = document.createElement("td");
    var cpfTd = document.createElement("td");
    var telefoneTd = document.createElement("td");
    var cepTd = document.createElement("td");
    var logradouroTd = document.createElement("td");
    var numeroTd = document.createElement("td");
    var bairroTd = document.createElement("td");
    var cidadeTd = document.createElement("td");
    var estadoTd = document.createElement("td");

    nomeTd.textContent = nome;
    emailTd.textContent = email;
    cpfTd.textContent = cpf;
    telefoneTd.textContent = telefone;
    cepTd.textContent = cep;
    logradouroTd.textContent = logradouro;
    numeroTd.textContent = numero;
    bairroTd.textContent = bairro;
    cidadeTd.textContent = cidade;
    estadoTd.textContent = estado;

    clienteTr.appendChild(nomeTd);
    clienteTr.appendChild(emailTd);
    clienteTr.appendChild(cpfTd);
    clienteTr.appendChild(telefoneTd);
    clienteTr.appendChild(cepTd);
    clienteTr.appendChild(logradouroTd);
    clienteTr.appendChild(numeroTd);
    clienteTr.appendChild(bairroTd);
    clienteTr.appendChild(cidadeTd);
    clienteTr.appendChild(estadoTd);

    console.log(clienteTr);

    var tabela = document.querySelector("#tabela-clientes");

    tabela.appendChild(clienteTr);

    form.reset();

})