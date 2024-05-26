import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ErrorsComponent } from './shared/components/errors/errors.component';
import { ItemsFacade } from './shared/services/items.state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinnerComponent, ErrorsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'v18';
  itemsFacade = inject(ItemsFacade);
  items$ = this.itemsFacade.getState();
  constructor() {
    this.itemsFacade.dispatch({ type: 'fetch' });
  }
}
