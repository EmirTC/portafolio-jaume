const formDom = document.querySelector("#contact");
const mailerButton = document.querySelector("#mailer");

formDom.addEventListener("submit", sendMail);

function sendMail(e){
    e.preventDefault();
    const form = new FormData(this);

    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    mailerButton.setAttribute("href", `mailto:a.emir1506@gmail.com?subject=${name} - ${email}&body= Hola Emir, mi nombre es ${name} y me gustaria ponerme en contacto contigo por: ${message}. Favor de mandar correo a: ${email}`)

    mailerButton.click();
}

console.log(mailerButton)