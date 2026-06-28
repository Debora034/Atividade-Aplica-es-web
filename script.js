const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");
const form = document.querySelector("#form");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (nome.value.trim() === "") {
        alert("Digite seu nome.");
        return;
    }

    if (email.value.trim() === "") {
        alert("Digite seu email.");
        return;
    }
    if (!email.value.includes("@") || !email.value.includes(".")) {
    alert("Digite um email válido.");
    return;
}

    if (mensagem.value.trim() === "") {
        alert("Digite sua mensagem.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    form.reset();
});
