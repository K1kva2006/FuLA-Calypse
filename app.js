const container = document.querySelectorAll(".container");

const searchValue = document.getElementById("search");

const title = document.querySelectorAll(".title");

searchValue.addEventListener("input", (e) => {
    let inputValue = e.target.value.toLowerCase();

    title.forEach((item) => {
        if (item.textContent.toLowerCase().includes(inputValue)) {
            item.parentElement.style.display = "flex";
        } else {
            item.parentElement.style.display = "none";
        }
    });
});
