// Title scroll animation Start

msg = "Abdelrahman Gamal - UI/UX Designer";
msg = " ...Abdelrahman Gamal - UI/UX Designer " + msg;position = 0;
function scrolltitle() {
document.title = msg.substring(position, msg.length) + msg.substring(0, position); position++;
if (position > msg.length) position = 0
window.setTimeout("scrolltitle()",170);
}
scrolltitle();

// Gallery
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

// Hide logo function
let menu = document.querySelector('.toggler');

let elementToHideShow = document.querySelector('.content');

menu.addEventListener('click', function() {

    if (elementToHideShow.style.display === 'none') {

        elementToHideShow.style.display = 'block';

    } else {

        elementToHideShow.style.display = 'none';

    }
});
// Title scroll animation Start
