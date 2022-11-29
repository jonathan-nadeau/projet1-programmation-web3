import { Component, Input, OnInit } from '@angular/core';
import { IEstablishment, IPackage } from 'src/app/types';

@Component({
  selector: 'app-package-description',
  templateUrl: './package-description.component.html',
  styleUrls: ['./package-description.component.scss'],
})
export class PackageDescriptionComponent implements OnInit {
  @Input() package = {} as IPackage;

  dateToString(sqlDate: string): string {
    let date: Date = new Date(sqlDate);
    let options: Intl.DateTimeFormatOptions = { dateStyle: 'long' };

    const newDate = date.toLocaleDateString('fr-CA', options);

    return newDate;
  }

  // startDate = new Date(this.package.startDate).toLocaleDateString('fr-CA', {
  //   dateStyle: 'long',
  // });
  // endDate = new Date(this.package.endDate).toLocaleDateString('fr-CA', {
  //   dateStyle: 'long',
  // });

  constructor() {}

  ngOnInit(): void {}
}
