import { ConvertToUnicode } from "./src/index.js";

// Example Bijoy-encoded string (replace with a real Bijoy string for actual test)
const bijoyText =
  "evsjv‡`‡k 1jv RyjvB,1982 mvj †_‡K G †gwUªK c×wZ Pvjy Kiv nq| GLb ˆ`N©¨, †ÿÎdj, IRb I Zij c`v‡_©i AvqZb cÖwZwU";
const unicodeText = ConvertToUnicode("bijoy", bijoyText);

console.log("Bijoy:", bijoyText);
console.log("Unicode:", unicodeText);
