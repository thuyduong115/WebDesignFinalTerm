document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".mainCont *");

    function isIntoView(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    function checkElementsInView() {
        elements.forEach(el => {
            if (isIntoView(el)) {
                el.classList.add("active");
            } else {
                el.classList.remove("active"); // Loại bỏ lớp 'active' nếu không còn trong viewport
            }
        });
    }

    window.addEventListener("scroll", checkElementsInView);
    window.addEventListener("resize", checkElementsInView);

    // Kiểm tra một lần khi trang tải xong
    checkElementsInView();
});
