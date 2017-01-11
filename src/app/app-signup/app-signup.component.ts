import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { AppSignupService } from './services/app-signup.service'
import { User } from '../user'

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.css']
})
export class AppSignupComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private signUpService: AppSignupService) {
    
    this.form = formBuilder.group({
      'firstname': [''],
      'lastname': [''],
      'email': [''],
      'age': [''],
      'handle': [''],
      'bio': ['']
    
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
    const user = new User(
      this.form.get('firstname').value, 
      this.form.get('lastname').value, 
      this.form.get('email').value,
      this.form.get('age').value,  
      this.form.get('handle').value, 
      this.form.get('bio').value
    );
    this.signUpService.addUser(user);
    
  }

}
