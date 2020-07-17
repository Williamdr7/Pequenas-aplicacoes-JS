//Simulando um sistema de Autenticação
const loginsalvo = "Will"
const senhaSalva = "Duarte"

function autenticar(login, senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (login == loginsalvo && senha == senhaSalva) {
                resolve("Login efetuado com Sucesso")
            } else {
                reject("Usuário ou(e) Senha Incorreto(s)")
            }
        }, 2000)
    })
}
autenticar("Will", "Duarte").then((msg) => {
    console.log(msg)
}).catch((erro) => {
    console.log(erro)
})