function main(src) {
    src = prompt(" Nhập account đi bạn !");

    rexp = /^[_a-z0-9]{6}/;
    if (rexp.test(src)){

        alert(" Account hợp lệ ! ")
    }else {
        alert(" Account không hợp lệ rồi nhé !")
    }
}