import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule],
})
export class SpinnerComponent implements OnInit {
  loading = input.required<boolean>();
  routing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((ev) => {
      if (ev instanceof RouteConfigLoadStart) this.routing$.next(true);
      else if (ev instanceof RouteConfigLoadEnd) this.routing$.next(false);
    });
  }
}
