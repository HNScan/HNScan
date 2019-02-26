function search() {
  event.preventDefault();
  const searchbar = document.querySelector(".searchbar");
  const xhr = new XMLHttpRequest();
  let search = searchbar.value.trim(),
    length = search.length,
    block,
    address,
    hash,
    name;

  //AJAX request to handle search results
  if (search !== "") {
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        window.location.href = xhr.responseText;
      }
      else if (xhr.readyState == 4 && xhr.status !== 200) {
        console.log(xhr.status)
        console.log("Error" + xhr.responseText);
      }
    };
    xhr.open("POST", `/search?q=${search}`);
    xhr.send();
  }
}

function toggleMobileNav(e) {
  const navbarBurger = document.querySelector(".navbar-burger");
  const navbarMenu = document.querySelector(".navbar-menu");
  const moreElement = document.querySelector(".navbarMore");

  if (navbarBurger && navbarMenu && moreElement) {
    navbarBurger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  }
}

function navDropdownListeners() {
  let dropdowns = document.querySelectorAll(".navbarMore");
  for (dropdown of dropdowns) {
    dropdown.addEventListener("click", function(e) {
      // Note, this will only work if navbarMore only has 1 sibling that is a navbar-dropdown
      let sibling = e.target.nextSibling;
      sibling.classList.toggle("navbar-dropdown-visible");
    });
  }
}
navDropdownListeners();
