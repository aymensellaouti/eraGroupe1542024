import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log({route});

    if (route.data && route.data['preload']) {
      // Preload ce module la
      return load();
    }
    // Ne fait pas de preload je veux que ce module reste en lazy loading
    return of(null);
  }

}
