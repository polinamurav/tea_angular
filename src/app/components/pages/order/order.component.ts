import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private subscription: Subscription | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
