// JavaScript para controlar a abertura e fechamento da barra lateral
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-200px";
  } else {
    sidebar.style.left = "0px";
  }
}
