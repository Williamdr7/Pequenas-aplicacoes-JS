var msg = "Seja Bem vindo ao Nosso Blog"
nome = "Will"

function play(msg, nome, callback) {
    setTimeout(() => {
        console.log(`Olá ${nome}, ${msg}`)
        callback()
    }, 5000)
}


play(msg, nome, () => {
    console.log("Mensagem enviada")
})