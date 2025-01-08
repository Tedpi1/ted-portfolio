const form= document.querySelector('form')
const fullName=document.getElementById('name')
const email=document.getElementById('email')
const subject=document.getElementById('subject')
const message=document.getElementById('message')


function sendEmail(){
    const bodyMessage =`Name:${fullName.value}<br> Email: ${email.value}<br> 
    Subject: ${subject.value} <br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "moroted16@gmail.com",
        Password : "D7D714AEDD302CF738A354160A9AD0646CEA",
        To : 'moroted16@gmail.com',
        From : "moroted16@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if(message=='OK'){
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    sendEmail();
})