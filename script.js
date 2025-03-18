// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;
    
//     if (name && email && message) {
//         document.getElementById("responseMessage").innerText = "感谢您的留言，我们会尽快联系您！";
//         this.reset();
//     } else {
//         document.getElementById("responseMessage").innerText = "请填写完整信息。";
//     }
// });
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_3l9v35e';
   const templateID = 'template_2mlqs8l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
