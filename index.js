const QRCode = require('qrcode')
const prompt = require("prompt-sync")({ sigint: true });

function generateQr(){
    const isQr = prompt("Do you want to create qr for the user details (y/n) ");

    let data = {
        name: 'Anjali Goel',
        reach_me: 'anjaligoel117@gmail.com',
        fun_fact: 'A kdrama fan',
        linkedIn: 'https://www.linkedin.com/in/anjali-goel-15043115a/',
        github: 'https://github.com/anjalig117'
    };

    let userData = JSON.stringify(data);

    if (isQr == 'y'){
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