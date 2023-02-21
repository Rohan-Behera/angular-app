import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-nav',
  templateUrl: './logo-nav.component.html',
  styleUrls: ['./logo-nav.component.css']
})
export class LogoNavComponent {
  dropdown = false;
  openDropdown(){
    this.dropdown = true;
  }

}
