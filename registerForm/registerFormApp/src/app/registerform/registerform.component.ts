import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  constructor() { }
  registerForm:any //form
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "lastName": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "emailId": new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
    })
  }
  // submit funcion
  submitData()
  {
    console.log( this.registerForm.value );
    if(this.registerForm.valid){
      alert(`Thank you ${this.registerForm.value.firstName} `);
      this.registerForm.reset(); // reset form
    }
  }
  get firstName() {return this.registerForm.get('firstName'); } // firstName
  get lastName() {return this.registerForm.get('lastName'); } // lastName
  get emailId() {return this.registerForm.get('emailId'); } // emaiId
  get mobileNumber() {return this.registerForm.get('mobileNumber'); } // mobileNumber
}
