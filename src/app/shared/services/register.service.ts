import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FieldConfig } from '../types/form.types';
import { Api } from '../utils/api';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  http = inject(HttpClient);
  formConfig$: Observable<any> = this.http
    .get<{ data: FieldConfig[] }>(Api.DATA_FORM_CONFIG)
    .pipe(map((resp: { data: FieldConfig[] }) => resp.data));
}
