// Searchbar on Enter Keypress
function catchEnter(e) {
  const searchbar = document.querySelector(".searchbar");
  const xhr = new XMLHttpRequest();
  let search = searchbar.value.trim(),
    length = search.length,
    block,
    address,
    hash,
    name;

  //AJAX request to handle search results
  if (search !== "" && e.keyCode === 13) {
    xhr.onreadystatechange = () => {
      if (this.readyState == 4 && this.status == 200) {
        console.log("Success!");
      } else {
        console.log("Error" + this.responseText);
      }
    };
    xhr.open("POST", `/search?q=${search}`);
    xhr.send();
  }
}

function toggleMobileNav(e) {
  const navbarBurger = document.querySelector(".navbar-burger");
  const navbarMenu = document.querySelector(".navbar-menu");
  const moreElement = document.querySelector("#navbarMore");

  console.log(moreElement);

  if (navbarBurger && navbarMenu && moreElement) {
    navbarBurger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  }
}

function goBack() {
  window.history.back();
}
