document.addEventListener("DOMContentLoaded", function() {
    const emailCopyBtn = document.querySelector('.email-copy-img');
    const callCopyBtn = document.querySelector('.call-copy-img');

    emailCopyBtn.addEventListener('click', function() {
        const emailText = document.querySelector('.get-in-touch-email').innerText;
        copyToClipboard(emailText);
    });

    callCopyBtn.addEventListener('click', function() {
        const callText = document.querySelector('.get-in-touch-mobile').innerText;
        copyToClipboard(callText);
    });

    function copyToClipboard(text) {
        const dummyElement = document.createElement('textarea');
        dummyElement.value = text;
        document.body.appendChild(dummyElement);
        dummyElement.select();
        document.execCommand('copy');
        document.body.removeChild(dummyElement);
        alert("Copied to clipboard: " + text);
    }
});
