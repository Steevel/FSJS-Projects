let textArea = document.getElementById('message');
let copyButton = document.getElementById('copyBtn');
let errorMessage = document.getElementById('errorMessage');
let successMessage = document.getElementById('successMessage');

copyButton.addEventListener('click', () => {
    let message = textArea.value;

    if (message.length === 0) {
        successMessage.innerText = ""
        errorMessage.innerText = "Please enter some text 👎"
    } else {
        navigator.clipboard.writeText(message)
        errorMessage.innerText = ""
        textArea.value = ""
        successMessage.innerText = "Text copied to clipboard! 👍"
    }
})