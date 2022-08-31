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
      "lastName": new FormControl(null),
      "emailId": new FormControl(null),
      "mobileNumber": new FormControl(null),
    })
  }
  // submit funcion
  submitData()
  {
    console.log( this.registerForm.value );
  }
  get firstName() {return this.registerForm.get('firstName'); }
}
