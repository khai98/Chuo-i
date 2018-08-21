regexp = /^[A-Z]/;
function upperCase(str){
    str = prompt(" nhap di may")
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}
