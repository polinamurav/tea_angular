import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from "rxjs";

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;
  private observable: Observable<number>;

  isModalVisible: boolean = false;

  constructor() {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next()
      }, 10000);
    })
  }

  ngOnInit(): void {
    $('#accordion').accordion();

    this.subscription = this.observable.subscribe({
      next: value => { this.openModal() }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

}
