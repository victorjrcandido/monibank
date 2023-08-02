import { ehUmCpf } from "./valida-cpf.js";
import { ehMaiorDeIdade } from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.lenght >= 11) {
        ehUmCpf(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
}

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => {
        verificaCampo(campo);
    });
})

