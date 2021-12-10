import CryptoJS from "crypto-js";
let s = CryptoJS.SHA1(CryptoJS.enc.Utf8.parse("tSdGtmwh49BcR1irt18mxG41dGsBuGKS"))
          , a = CryptoJS.enc.Hex.parse(s.toString(CryptoJS.enc.Hex).substr(0, 32));
function l(t) {
    if (null == t)
        return null;
    var e = t
      , i = a
      , o = CryptoJS.AES.encrypt(e, i, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(o.ciphertext)
}
// console.log(process.argv.slice(2))
console.log(l(process.argv.slice(2)[0]));