class VigenereCipheringMachine {

    constructor(isTrue) {
        if (isTrue == undefined) {
            this.isTrue = true;
        } else {
            this.isTrue = false;
        }
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) throw 'Error'
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        message = message.toUpperCase();
        key = key.toUpperCase();

        if (message.length > key.length) {

            let newkey = [];
            for (let j = 0; message.length > newkey.length; j++) {
                if (key.length <= j) j = 0;
                if (message[newkey.length] == ' ') newkey.push(' ');
                newkey.push(key[j]);
            }
            key = newkey;
        }

        let encrypted = [];
        for (let i = 0; i < message.length; i++) {

            if (alphabet.indexOf(message[i]) === -1) {
                encrypted.push(message[i]);
                continue
            }

            let char = alphabet.indexOf(message[i]) + alphabet.indexOf(key[i]) % 26;
            if (char > 25) char -= 26;
            encrypted.push(alphabet[char]);
        }
        if (this.isTrue == true) return encrypted.join('');
        else return encrypted.reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) throw 'Error'
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();

        if (encryptedMessage.length > key.length) {

            let newkey = [];
            for (let j = 0; encryptedMessage.length > newkey.length; j++) {
                if (key.length <= j) j = 0;
                if (encryptedMessage[newkey.length] == ' ') newkey.push(' ');
                newkey.push(key[j]);
            }
            key = newkey;
        }

        let decrypted = [];
        for (let i = 0; i < encryptedMessage.length; i++) {

            if (alphabet.indexOf(encryptedMessage[i]) === -1) {
                decrypted.push(encryptedMessage[i]);
                continue
            }

            let char = alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[i]) % 26;
            if (char < 0) char += 26;
            decrypted.push(alphabet[char]);
        }
        if (this.isTrue == true) return decrypted.join('');
        else return decrypted.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;