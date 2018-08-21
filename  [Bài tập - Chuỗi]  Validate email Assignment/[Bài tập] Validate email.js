function email(src) {
    src = prompt(" Hãy Nhập  01 Email Xem Có Hợp Lệ Không nhé !");

    regexp = /^[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/;

    if (regexp.test(src)) {
        alert("email hợp lệ rồi bạn ơi 1 ")
    } else {
        alert("email  hợp lệ rồi nhập lại đi bạn ! ")
    }
}

