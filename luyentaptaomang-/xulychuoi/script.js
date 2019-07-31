function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log("ky tu dau tien cua chuoi la chu hoa");
    }else {
        console.log("ky tu dau tien cua chuoi khong phai la chu hoa");
    }
}
isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');