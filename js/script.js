// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar unruk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Message Section
function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var gender = document.forms["message-form"]["gender"].value;
  var saranmasukan =
    document.forms["message-form"]["saran-masukan"].value;
  var satukata = document.forms["message-form"]["satu-kata"].value;

  if (
    name == "" ||
    gender == "" ||
    saranmasukan == "" ||
    satukata == ""
  ) {
    alert("Tidak boleh ada yang kosong");
    return false;
  }
  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-gender").innerText = gender;
  document.getElementById("sender-saran-masukan").innerText =
    saranmasukan;
  document.getElementById("sender-satu-kata").innerText = satukata;
  return false;
}