import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

const primaryNav = document.querySelector('.primary-navigation');
const navMobile = document.querySelector('.mobile-nav-toggle');

navMobile.addEventListener('click', () =>{
  const visibility = primaryNav.getAttribute("data-visible");
  console.log(visibility)

  if (visibility === "false"){
    primaryNav.setAttribute("data-visible", true);
    navMobile.setAttribute("aria-expanded", true);
  }
  else if (visibility === true){
    primaryNav.setAttribute("data-visible" , false);
    navMobile.setAttribute("aria-expanded", false);
  }
})


}
