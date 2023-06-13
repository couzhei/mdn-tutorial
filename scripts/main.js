setTimeout(main, 1000);

function main(){
    const myHeading = document.querySelector("h1");
    myHeading.textContent = "Hello world!";
    // document.querySelector("html").addEventListener("click", function () {
    //     alert("Ouch! Stop poking me!");
    //   });
    var colorButton = document.getElementById("colorButton");
    var themeStylesheet = document.getElementById("themeStylesheet");

    var currentTheme = "theme1";

    colorButton.addEventListener("click", function() {
    if (currentTheme === "theme1") {
        currentTheme = "theme2";
        myHeading.textContent = "Theme 2 loaded!";
    } else {
        currentTheme = "theme1";
        myHeading.textContent = "Theme 1 loaded!";
    }
    themeStylesheet.href = "styles/" + currentTheme + "-style.css";
    });
}
