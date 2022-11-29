import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-price',
  templateUrl: './package-price.component.html',
  styleUrls: ['./package-price.component.scss'],
})
export class PackagePriceComponent implements OnInit {
  @Input() price: number = 0;
  @Input() newPrice: number = 0;

  isNewPrice(): boolean {
    return this.price !== this.newPrice;
  }

  constructor() {}

  ngOnInit(): void {}
}
