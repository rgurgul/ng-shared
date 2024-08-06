import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface IMenu {
  path: string;
  name: string;
}

@Component({
  selector: 'lib-menu',
  template: `
    <nav>
      <ul class="flex space-x-2">
        @for (menu of _menus; track menu) {
        <li>
          <a
            class="rounded px-4 py-3 bg-blue-400 "
            routerLinkActive="bg-blue-600"
            [routerLink]="menu.path"
            >{{ menu.name }}</a
          >
        </li>
        }
      </ul>
    </nav>
  `,
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class MenuComponent {
  _menus!: IMenu[];
  @Input()
  set menus(menu: IMenu[]) {
    this._menus = menu;
  }
}
