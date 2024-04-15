import { Component } from '@angular/core';
import { from, interval, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent {
  tab = [1,2,3];

  constructor() {
    of(this.tab).subscribe({
      next: (x) => console.log('[of : ]' + x),
      complete: () => console.log('OF COMPLETED')
    });
    from(this.tab)
    .pipe(take(2))
    .subscribe({
      next: (x) => console.log('[from : ]' + x),
      complete: () => console.log('from COMPLETED'),
    });
    timer(1000).subscribe((x) => console.log(x));
    timer(0,1000).subscribe((x) => console.log(x));
    interval();
  }
}
