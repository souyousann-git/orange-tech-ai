document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "感谢您的留言，我们会尽快联系您！";
        this.reset();
    } else {
        document.getElementById("responseMessage").innerText = "请填写完整信息。";
    }
});
