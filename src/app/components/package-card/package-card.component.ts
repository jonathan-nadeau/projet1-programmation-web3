import { Component, Input, OnInit } from '@angular/core';
import { IPackage } from 'src/app/types';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss'],
})
export class PackageCardComponent implements OnInit {
  @Input() package = {} as IPackage;

  constructor() {}

  dateToString(sqlDate: string): string {
    let date: Date = new Date(sqlDate);
    let options: Intl.DateTimeFormatOptions = { dateStyle: 'long' };

    const newDate = date.toLocaleDateString('fr-CA', options);

    return newDate;
  }

  ngOnInit(): void {}
}
