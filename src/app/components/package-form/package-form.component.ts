import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.scss'],
})
export class PackageFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  package = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    categories: this.fb.array([]),
    establishment: this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      contactDetails: this.fb.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        phoneNumber: ['', Validators.pattern(/^\d{10}$/)],
        email: ['', Validators.email],
        website: ['', Validators.required],
      }),
    }),
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    isPremium: [''],
    price: [0.0, Validators.required],
    newPrice: [0.0],
  });

  ngOnInit(): void {}
}
