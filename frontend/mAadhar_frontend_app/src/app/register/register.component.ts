import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      // Define other form fields with validators
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Process the registration form submission
      console.log(this.registerForm.value);
    } else {
      // Handle form validation errors
    }
  }
}
