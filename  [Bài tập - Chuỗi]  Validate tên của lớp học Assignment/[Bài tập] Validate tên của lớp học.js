function className(src) {
    src = prompt(" Nhập tên để kiểm tra xem có hợp lệ không nhé !");

    rexg = /^[C,A,P]{1}[0-9]{4}[G,H,I,K,L,M]{1}$/;

    if (rexg.test(src)){

        alert(" Tên hợp lệ !")

    } else {
        alert(" Tên không hợp lệ rồi !")
    }
}

className();