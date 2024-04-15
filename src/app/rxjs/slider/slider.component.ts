import { Component, Input } from '@angular/core';
import { Observable, map, tap, timer } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
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
    timer(0, 1000).pipe(
      map((index) => this.paths[index % this.paths.length]),
    );
}
