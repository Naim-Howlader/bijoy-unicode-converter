import { ConvertToASCII, ConvertToUnicode } from "./src/index.js";

// Example Bijoy-encoded string (replace with a real Bijoy string for actual test)
const bijoyText = "f,";
const unicodeText = ConvertToUnicode("bijoy", bijoyText);
const asciiText = ConvertToASCII("unicode", unicodeText);

console.log("Bijoy:", bijoyText);
console.log("Unicode:", unicodeText);
console.log("ASCII:", asciiText);
