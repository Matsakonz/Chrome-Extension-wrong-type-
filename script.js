document.getElementById("thai").addEventListener("input", convertEng);
document.getElementById("eng").addEventListener("input", convertThai);

var thaiWord = ["%","ๅ","/","-","ภ","ถ","ุ","ึ","ค","ต","จ","ข","ช","ๆ","ไ","ำ","พ","ะ","ั","ี","ร","น","ย","บ","ล","ฃ","ฟ","ห","ก","ด","เ","้",
"่","า","ส","ว","ง","ผ","ป","แ","อ","ิ","ื","ท","ม","ใ","ฝ","+","๑","๒","๓","๔","ู","฿","๕","๖","๗","๘","๙","๐",'"',"ฎ","ฑ","ธ","ํ","๊","ณ",
"ฯ","ญ","ฐ",",","ฅ","ฤ","ฆ","ฏ","โ","ฌ","็","๋","ษ","ศ","ซ",".","(",")","ฉ","ฮ","ฺ","์","?","ฒ","ฬ","ฦ"," "];

var engWord = ["~","1","2","3","4","5","6","7","8","9","0","-","=","q","w","e","r","t","y","u","i","o","p","[","]","\\",
"a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",",".","/","!","@","#","$","%","^","&","*","(",")",
"_","+","Q","W","E","R","T","Y","U","I","O","P","{","}","|","A","S","D","F","G","H","J","K","L",":",'"',"Z","X","C","V","B",
"N","M","<",">","?"," "];

function convertEng() {
    var originalText = document.getElementById("thai").value;
    var newText = "";

    for (var i = 0; i < originalText.length; i++) {
        if (originalText[i] == "\n") {
            newText += "\n";
        }
        for (var j = 0; j <= 93; j++) {
            if (originalText[i] == thaiWord[j]) {
                newText += engWord[j];
            }
        }
    }
    document.getElementById("eng").value = newText;
}

function convertThai() {
    var originalText = document.getElementById("eng").value;
    var newText = "";

    for (var i = 0; i < originalText.length; i++) {
        if (originalText[i] == "\n") {
            newText += "\n";
        }
        for (var j = 0; j <= 93; j++) {
            if (originalText[i] == engWord[j]) {
                newText += thaiWord[j];
            }         
        }
    }
    document.getElementById("thai").value = newText;
}
