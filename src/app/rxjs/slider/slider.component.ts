import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, combineLatest, debounceTime, map, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  api = 'https://jsonplaceholder.typicode.com/photos';
  formBuilder = inject(FormBuilder);
  http = inject(HttpClient);
  imagesUrls$ = this.http.get<any[]>(this.api);
  form = this.formBuilder.group({
    search: [''],
  });
  constructor() {
    // this.search?.valueChanges.pipe(
    //   // a
    //   debounceTime(500),
    //   switchMap((text) => this.notreService.search(text)),
    //   tap(data => console.log(data))
    // ).subscribe()
  }
  @Input() paths = [
    'as.jpg',
    '404.png',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  images$: Observable<string> =
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
    timer(0, 1000).pipe(map((index) => this.paths[index % this.paths.length]));
  // get search () {
  //   return this.form.get('search');
  // }
  images2$: Observable<string> = combineLatest([
    this.imagesUrls$,
    timer(0, 1000),
  ]).pipe(
    // tap(([images, index]) => console.log({images, index})),
    map(([images, index]) => images[index % images.length].url)
  );
}
