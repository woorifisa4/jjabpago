document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");

    // 초기 상태 설정: 첫 번째 탭 활성화
    activateTab(tabs[0]);

    // 탭 클릭 이벤트 설정
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            activateTab(tab);
        });
    });

    /**
     * 특정 탭을 활성화 상태로 설정하는 함수
     * @param {HTMLElement} tab - 활성화할 탭
     */
    function activateTab(tab) {
        // 모든 탭에서 활성화 상태 제거
        tabs.forEach((t) => {
            t.classList.remove("active");
            const icon = t.querySelector(".tab-icon");
            if (icon) {
                icon.style.fill = "#808080"; // 기본 아이콘 색상
            }
        });

        // 클릭된 탭 활성화
        tab.classList.add("active");
        const activeIcon = tab.querySelector(".tab-icon");
        if (activeIcon) {
            activeIcon.style.fill = "#1FDC6D"; // 활성화 아이콘 색상
        }
    }
});
