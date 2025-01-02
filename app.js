document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.querySelector(".tabs-container");
    const tabs = document.querySelectorAll(".tab");
    const inputText = document.getElementById("inputText");

    // 초기 상태 설정: 첫 번째 탭 활성화
    if (tabs.length > 0) {
        activateTab(tabs[0]);
    }

    // 탭 클릭 이벤트 (위임 방식)
    tabsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab")) {
            activateTab(e.target);
        }
    });

    // 문자 수 카운트 및 제한
    inputText.addEventListener("input", function () {
        const maxLength = parseInt(this.getAttribute("maxlength"), 10);
        if (this.value.length > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }
        document.querySelector(".char-count").textContent = `${this.value.length}/${maxLength}`;
    });

    /**
     * 특정 탭을 활성화 상태로 설정하는 함수
     * @param {HTMLElement} tab - 활성화할 탭
     */
    function activateTab(tab) {
        // 모든 탭에서 활성화 상태 제거
        tabs.forEach((t) => t.classList.remove("active"));

        // 클릭된 탭 활성화
        tab.classList.add("active");

        // 연결된 콘텐츠 표시/숨김 처리
        const contentId = tab.dataset.contentId;
        document.querySelectorAll(".tab-content").forEach((content) => {
            content.style.display = content.id === contentId ? "block" : "none";
        });
    }
});
