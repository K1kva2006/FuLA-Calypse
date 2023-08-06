const download = document.querySelectorAll(".card-download");
const downloadButton = document.querySelectorAll(".download");

download.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.color = "green";

  });
});

downloadButton.forEach((item) => {
  item.addEventListener("click", () => {
    item.textContent = "ჩამოტვირთულია";
  });
});
