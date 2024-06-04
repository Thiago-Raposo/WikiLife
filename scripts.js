function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("overlay");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-200px";
    overlay.style.display = "none";
  } else {
    sidebar.style.left = "0px";
    overlay.style.display = "block";
  }
}
