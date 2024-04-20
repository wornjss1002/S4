window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block"; // 스크롤이 20px 이상이면 버튼 표시
    } else {
        document.getElementById("topBtn").style.display = "none"; // 스크롤이 20px 미만이면 버튼 숨김
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
