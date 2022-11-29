import { Component, OnInit } from '@angular/core';
import { IPackage } from 'src/app/types';
import DATA from '../../../MOCK.json';

@Component({
  selector: 'app-packages-list',
  templateUrl: './packages-list.component.html',
  styleUrls: ['./packages-list.component.scss'],
})
export class PackagesListComponent implements OnInit {
  packages = DATA as IPackage[];

  premiumPackages(): IPackage[] {
    return this.packages.filter((item) => item.premium) as IPackage[];
  }

  constructor() {}

  ngOnInit(): void {}
}
