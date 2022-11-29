import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.scss'],
})
export class PackageFormComponent implements OnInit {
  constructor() {}

  packageForm = new FormGroup({
    packageName: new FormControl(''),
    description: new FormControl(''),
    establishmentName: new FormControl(''),
    establishmentDescription: new FormControl(''),
    establishmentAddress: new FormControl(''),
    establishmentCity: new FormControl(''),
    establishmentPostalCode: new FormControl(''),
    establishmentPhoneNumber: new FormControl(''),
    establishmentEmail: new FormControl(''),
    establishmentWebsite: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    isPremium: new FormControl(false),
    price: new FormControl(0.0),
    newPrice: new FormControl(0.0),
  });

  ngOnInit(): void {}
}
