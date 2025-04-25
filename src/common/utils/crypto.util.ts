import { createHash } from "crypto";

const btoa = (text:string) => Buffer.from(text, 'binary').toString('base64');
const atob = (base64: string) => Buffer.from(base64, 'base64').toString('binary');

const key = "secretKey";

export const encrypt = (source: string) => {
    let result = '';
    let char = '';
    let keychar = '';
    let charOut = '';

    for (let i = 0; i < source.length; i++) {
        char = source.charAt(i);
        keychar = key.substr((i % key.length) - 1, 1);
        charOut = String.fromCharCode(char.charCodeAt(0) + keychar.charCodeAt(0));
        result += charOut;
    }

    return btoa(result);
}

export const decrypt = (source: string) => {
    const decriptedSource = atob(source);
    let result = '';
    let char = '';
    let keychar = '';

    for (let i = 0; i < decriptedSource.length; i++) {
        char = decriptedSource.charAt(i);
        keychar = key.substr((i % key.length) - 1, 1);
        char = String.fromCharCode(char.charCodeAt(0) - keychar.charCodeAt(0));
        result += char;
    }

    return result;
}

/**
 * Hashes a string using md5
 * 
 * @param {string} message - mensaje a encriptar
 * @returns {string}
 */
export const md5 = (message: string): string => {
    const hash = createHash('md5').update(message).digest('hex');

    return hash;
}