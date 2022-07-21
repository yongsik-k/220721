//토글버튼 클릭시에 이벤트 발생
const toggleButton = document.querySelector(".toggle-button");
const body = document.querySelector("body");
const headerNav = document.querySelector(".header-nav");
const bookmarkWrapper = document.querySelector(".bookmark-wrapper");
const texts = document.querySelectorAll(".text");

toggleButton.addEventListener("click", function () {
  console.log("다크모드버튼이눌렸어요!");
  //버튼 클릭시마다 classList의 toggle로 class 추가한다.
  toggleButton.textContent = "다크 모드";
  toggleButton.classList.toggle("toggle-button-darkmode");
  body.classList.toggle("body-background-darkmode");

  headerNav.classList.toggle("text-darkmode");

  //   bookmarkWrapper.classList.toggle("text-darkmode");

  for (let i = 0; i < texts.length; i++) {
    texts[i].classList.toggle("text-darkmode");
  }
  // classList 의 contains로 활용
  if (toggleButton.classList.contains("toggle-button-darkmode")) {
    toggleButton.textContent = "일반 모드";
  }
});
// 구글 이동
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.code === "Enter") {
    console.log("가즈아");

    //유효성 검사
    //빈값의 경우 검색어를 입력하지 않았다고 해주기

    if (!e.target.value) {
      alert("검색어를 입력하지 않았습니다!");
      return;
    }

    //https://www.google.com/search?q=내용 << 내용부분에 검색하게 된다면 그 주소로 검색하게 된다.

    const target = "https://www.google.com/search?q=";

    //이동하는 두가지 방법이 있다. 첫번쨰 그냥이동 두번쨰는 새탭이동
    //그냥이동
    //location.href
    // location.href = "https://www.google.com/search?q=" + e.target.value
    //새탭이동
    //window.open

    window.open(target + e.target.value);
  }
});
