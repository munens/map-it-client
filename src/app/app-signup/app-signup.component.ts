import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.css']
})
export class AppSignupComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
    this.form = formBuilder.group({
      'username': ['Max', [Validators.required]],
      'password': [''],
      'email': [''],
    
      // 'userData': formBuilder.group({
      //   'usernameGroup': ['Max', [Validators.required]],
      //   'emailGroup': ['', []],
      //   'passwordGroup': ['', []]
        
      // })

    })
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);
  }



}
