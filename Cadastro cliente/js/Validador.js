class Validador {

    validar() {

        let mensagem = ""
        let nome = document.getElementById("inputNome").value
        let email = document.getElementById("inputEmail").value
        let sexo = document.querySelector("[type=radio]:checked")
        let cursos = document.querySelectorAll("[type=checkbox]:checked").length
        let estados = document.getElementById("estado").value
        let foto = document.getElementById("foto").files[0]
        let datanasc = document.getElementById("datanasc").value

        if (nome == "") {
            mensagem += "O campo nome é obrigatório!\n"
        }

        if (email == "") {
            mensagem += "O campo email é obrigatório!\n"
        }

        if (sexo == null) {
            mensagem += "Selecione o sexo!\n"
        }

        if (cursos == 0) {
            mensagem += "Selecione o(s) cursos!\n"
        }

        if (estados == "") {
            mensagem += "Selecione um estado!\n"
        }

        if (foto == undefined) {
            mensagem += "Selecione uma foto!\n"
        }

        if (datanasc == "") {
            mensagem += "Selecione à data de nascimento e horário!\n"
        }

        if (mensagem != "") {
            document.getElementById("textoMensagem").innerText = mensagem
            document.querySelector('#mensagens').classList.add('show')
        }

    }
}

let validador = new Validador()

