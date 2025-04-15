const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Verificando se os campos estão vazios
    if (formulario.nome.value.trim() === "" || formulario.celular.value.trim() === "") {
        alert("Insira o e-mail e a senha");
    } else {
        let nome = formulario.nome.value;
        let celular = formulario.celular.value;

        // Exibindo os valores no console e no alerta
        console.log(nome, celular);
        alert("O nome é " + nome + " e o contato é " + celular);
        alert(`O nome é ${nome} e o contato é ${celular}`);
    }
});
