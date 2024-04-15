import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnDestroy {
  firstObservable$: Observable<number>;
  subscriptions: Subscription[] = [];
  constructor(private toaster: ToastrService) {
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    // 1 2 3 4 5
    // Une inscription
    this.subscriptions.push(this.firstObservable$.subscribe((val) => {
      console.log(val);
    }));
    setTimeout(
      () => {
        // Une seconde inscription
          this.subscriptions.push(
            // 1 2 3 4 5
              this.firstObservable$
               .pipe(
        // map( element => element  * 3),
                   filter( element => element % 2 == 0)
                  //  2 4
               )
              .subscribe({
                  next: (value) => this.toaster.info('' + value),
                  complete: () => this.toaster.success('Fin du Game :)')
              }
              ));
        }, 1500);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription: Subscription) => subscription.unsubscribe()
    )
  }
}
