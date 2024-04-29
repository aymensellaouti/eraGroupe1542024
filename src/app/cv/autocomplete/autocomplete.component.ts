import { Component, inject } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  cvs$!: Observable<Cv[]>
  ngOnInit() {
    this.cvs$ = this.search.valueChanges.pipe(
    // Attend que le user reste inactif pendant 500 ms
    debounceTime(500),
    // N'emmet pas la valeur si elle ne change pas
    distinctUntilChanged(),
    switchMap(search => this.cvService.selectByName(search))
  )
  }
  get search(): AbstractControl {
    return this.form?.get('search')!;
  }
  form = this.formBuilder.group({ search: [''] });
}
