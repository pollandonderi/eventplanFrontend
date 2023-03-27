import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faWaze } from '@fortawesome/free-brands-svg-icons';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  smile = faWaze
  registerForm!: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService
  ) { }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
      
    })
    
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }
  

}
