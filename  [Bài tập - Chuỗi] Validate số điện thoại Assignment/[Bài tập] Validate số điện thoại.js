function SDT(src) {

    src = prompt(" Nhập SĐT đi bạn!");
    regexp = /^[(][0-9]{2}[)]-[(][0][0-9]{9}[)]$/;


    if (regexp.test(src)){
        alert(" số điện thọai bạn nhập hợp lệ rồi nhé !  ")
    } else {
        alert(" số điện thọai bạn nhập  không hợp lệ rồi nhé !   ")
    }
}