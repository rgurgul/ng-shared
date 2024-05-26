import { KeyValuePipe } from '@angular/common';
import { Component, OnInit, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
    selector: '[errors]',
    templateUrl: './errors.component.html',
    standalone: true,
    imports: [KeyValuePipe]
})
export class ErrorsComponent implements OnInit {

  errors = input<ValidationErrors | null>();

  ngOnInit() { }
}
