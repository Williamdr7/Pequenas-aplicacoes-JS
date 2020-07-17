function getId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 20 })
            reject("Error to get ID")
        }, 1000)
    })
}

function findEmail(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 20 }, () => {
                console.log(id)
            })
            reject("Error to find email")
        }, 1000)
    })
}

function SendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Success to send Email`)
            reject("Error to Send Email")
        }, 1000)
    })
}

async function send() {
    var id = await getId()
    var email = await findEmail(id)
    await SendEmail();
    try {
        console.log("Success")
    } catch (erro) {
        console.log(erro)
    }

}

send()