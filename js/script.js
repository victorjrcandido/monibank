import { ehUmCpf } from "./valida-cpf.js";
const camposDoFormulario = document.querySelectorAll("[required]");

function verificaCampo(campo) {
    if (campo.name == cpf && campo.value.lenght >= 11) {
        ehUmCpf(campo);
    }
}

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => {
        verificaCampo(campo);
    });
})