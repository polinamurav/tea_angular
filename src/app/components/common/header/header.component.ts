import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  resetSearch() {
    this.searchQuery = '';
    this.router.navigate(['/products']);
  }

}
