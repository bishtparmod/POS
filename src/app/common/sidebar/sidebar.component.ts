import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeNavBar(){
   document.getElementById('navbarcollapse').click()
  }

}
