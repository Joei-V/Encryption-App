// Using AES encryption from CryptoJS


function encrypt() {
    const text = document.getElementById('inputText').value;
    const password = document.getElementById('password').value;

    if (!text || !password) {
        alert('Please enter both text and password!');
        return;
    }

    try {
        const encrypted = CryptoJS.AES.encrypt(text, password).toString();
        document.getElementById('outputText').value = encrypted;
    } catch (error) {
        alert('Encryption failed: ' + error.message);
    }
}

function decrypt() {
    const encryptedText = document.getElementById('inputText').value;
    const password = document.getElementById('password').value;

    if (!encryptedText || !password) {
        alert('Please enter both encrypted text and password!');
        return;
    }

    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedText, password);
        const originalText = decrypted.toString(CryptoJS.enc.Utf8);

        if (!originalText) {
            throw new Error('Invalid password or corrupted text');
        }

        document.getElementById('outputText').value = originalText;
    } catch (error) {
        alert('Decryption failed: ' + error.message);
    }
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}