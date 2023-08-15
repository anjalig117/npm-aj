const QRCode = require('qrcode')

function generateQr(){
    let data = {
        name: 'Anjali Goel',
        reach_me: 'anjaligoel117@gmail.com',
        fun_fact: 'A kdrama fan',
        linkedIn: 'https://www.linkedin.com/in/anjali-goel-15043115a/',
        github: 'https://github.com/anjalig117'
    };

    let userData = JSON.stringify(data);

    QRCode.toString(userData, { type: 'terminal' },
        function (err, QRCode) {
            if (err) return console.log("error is ", err)

            console.log(QRCode)
        }
    )
}

module.exports = generateQr