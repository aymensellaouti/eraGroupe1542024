import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, map, takeWhile, scan, mergeMap } from 'rxjs';
import { Product } from './dto/product.dto';
import { ProductService } from './services/product.service';
import { Settings } from './dto/product-settings.dto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  getMoreProducts() {
    this.settings.skip += 12;
    this.settings$.next(this.settings);
  }
  productService = inject(ProductService);
  /**
   * Au click je vais chercher les products associés au settings actuel
   * concat le tableau avec l'ancienne liste
   * on met à jour les settings
   * On fait ca tantqu'on a des produits
   */
  settings: Settings = { limit: 12, skip: 0 };
  settings$: BehaviorSubject<Settings> = new BehaviorSubject(this.settings);
  products$: Observable<Product[]> = this.settings$.pipe(
    concatMap((settings) => this.productService.getProducts(settings)),
    map((response) => response.products),
    takeWhile((products) => !!products.length),
    scan((oldProducts, newProducts) => [...oldProducts, ...newProducts]),
  );
  constructor() {}
}
