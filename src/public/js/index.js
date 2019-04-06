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
    window.location.href = `/search?q=${search}`;
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //     window.location.href = xhr.responseText;
    //   }
    //   else if (xhr.readyState == 4 && xhr.status !== 200) {
    //     console.log("Error" + xhr.responseText);
    //   }
    // };
    // xhr.open("POST", `/search?q=${search}`);
    // xhr.send();
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

function toggleTheme(e) {
  e.preventDefault();
  document.documentElement.classList.add("color-theme-in-transition");

  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.removeAttribute("data-theme", "dark");
  }
  setTimeout(() => {
    document.documentElement.classList.remove("color-theme-in-transition");
  }, 1000);
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
