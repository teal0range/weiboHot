import CryptoJS from "crypto-js";

let s = CryptoJS.SHA1(CryptoJS.enc.Utf8.parse("tSdGtmwh49BcR1irt18mxG41dGsBuGKS"))
    , a = CryptoJS.enc.Hex.parse(s.toString(CryptoJS.enc.Hex).substr(0, 32));

function h(t) {
    let e = (i = t = String(t),
        o = CryptoJS.enc.Base64.parse(i),
        r = a,
        CryptoJS.AES.decrypt({
            ciphertext: o
        }, r, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString(CryptoJS.enc.Utf8));
    var i, o, r;
    return JSON.parse(e)
}

console.log(h(process.argv.slice(2)))