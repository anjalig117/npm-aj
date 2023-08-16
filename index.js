const QRCode = require('qrcode')
const prompt = require("prompt-sync")({ sigint: true });

function generateQr(){
    let data = {
        name: 'Anjali Goel',
        email: 'anjaligoel117@gmail.com',
        fun_fact: 'A kdrama fan',
        linkedIn: 'https://www.linkedin.com/in/anjali-goel-15043115a/',
        github: 'https://github.com/anjalig117'
    };

    console.log(`${"-".repeat(101)}\nName: ${data.name}\nEmail: ${data.email}\nFun Fact: ${data.fun_fact}\nLinkedIn: ${data.linkedIn}\nGithub Profile: ${data.github}\n${"-".repeat(101)}`)

    const isQr = prompt("Do you want to create qr for the user details? (y/n) ");

    let userData = JSON.stringify(data);

    if (isQr.toLowerCase() == 'y'){
        QRCode.toString(userData, { type: 'terminal' },
        function (err, QRCode) {
            if (err) return console.log("error is ", err)

            console.log(QRCode)
        }
    )
    }   
}

generateQr()
// module.exports = generateQr