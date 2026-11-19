// ALTERAÇÃO DO TEMA

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function() {

    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        botaoTema.textContent = "🌙 Tema escuro";
    } else {
        botaoTema.textContent = "☀️ Tema claro";
    }

});

// BOTÕES DE INTERESSE NOS CARROS

const botoes = document.querySelectorAll(".interesse");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const carro = botao.getAttribute("data-carro");

        document.getElementById("mensagem").value =
            "Tenho interesse no veículo: " + carro;

        document.getElementById("contato").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// FORMULÁRIO DE CONTATO

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("resposta").textContent =
        "Obrigado pelo contato, " + nome + "!";

    formulario.reset();

});


// VOLTAR AO TOPO

const botaoTopo = document.getElementById("voltarTopo");

botaoTopo.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});