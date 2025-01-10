const crypto = require("crypto");
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const IV = 16; // Ensure that IV is 16 bytes for AES-256-CBC

// Encrypt function
function encrypt(text) {
    if (!text) return text;
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), Buffer.from(IV.toString()));
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log("Encrypted data:", encrypted);  // Log to inspect the output
    return encrypted; // Return encrypted string (hex format)
  }

// Decrypt function
function decrypt(encryptedText) {
    if (!encryptedText) return encryptedText;
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), Buffer.from(IV.toString()));
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log("Decrypted data:", decrypted);  // Log to inspect the output
    return decrypted;
  }

module.exports = { encrypt, decrypt };
