import { Component } from '@angular/core';
import DATA from '../MOCK.json';
import { IPackage } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  packages = DATA as IPackage[];
}
