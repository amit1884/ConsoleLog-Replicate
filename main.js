
// function to show right sidebar
function showSidebar() {
    var element = document.getElementById("right-sidebar");
    element.classList.add("show-sidebar");
  }
// function to hide right sidebar
  function hideSidebar() {
    var element = document.getElementById("right-sidebar");
    element.classList.remove("show-sidebar");
  }

  function showLeftSidebar() {
    var element = document.getElementById("left-sidebar");
    element.classList.toggle("show-left-sidebar");
  }
 
  // Toggling the submenu of left sidebar
function toggleProMenu(){
  var element = document.getElementById("sm-1");
  element.classList.toggle("sub-menu-1");
  var element = document.getElementById("sm-2");
  element.classList.add("sub-menu-2");
  var element = document.getElementById("sm-3");
  element.classList.add("sub-menu-3");
}
function toggleICMenu(){
  var element = document.getElementById("sm-2");
  element.classList.toggle("sub-menu-2");

  var element = document.getElementById("sm-1");
  element.classList.add("sub-menu-1");

  var element = document.getElementById("sm-3");
  element.classList.add("sub-menu-3");
}
function toggleBlogMenu(){
  var element = document.getElementById("sm-3");
  element.classList.toggle("sub-menu-3");

  var element = document.getElementById("sm-2");
  element.classList.add("sub-menu-2");

  var element = document.getElementById("sm-1");
  element.classList.add("sub-menu-1")
}

// Preloader 

window.addEventListener('load',function(){
  
    document.querySelector('.preloader').classList.add("hide-loader") 
   
});
