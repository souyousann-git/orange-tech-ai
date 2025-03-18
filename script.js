const btn = document.getElementById('button');
const responseMessage = document.getElementById('responseMessage');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = '发送中...';

        const serviceID = 'service_3l9v35e';
        const templateID = 'template_2mlqs8l';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = '发送邮件';
                responseMessage.textContent = '感谢您的留言，我们会尽快联系您！';
                responseMessage.classList.add('success-message');
                responseMessage.classList.remove('hidden');
                this.reset();
            }, (err) => {
                btn.value = '发送邮件';
                responseMessage.textContent = '发送失败，请稍后再试。';
                responseMessage.classList.add('error-message');
                responseMessage.classList.remove('hidden');
                console.error(JSON.stringify(err));
            });
    });
