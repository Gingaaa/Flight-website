import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  homeContactForm:FormGroup;

  submitform:boolean=false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.checkValidation();
  }

  checkValidation()
  {
    this.homeContactForm=this.fb.group({
      // fullname: ["", [Validators.required , Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]')]],
 // subject: ["", [Validators.required,Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]')]],
      fullname: ["", [Validators.required , Validators.minLength(3), Validators.maxLength(30)]],
      email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
     
      subject: ["", [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
      message: ["", [Validators.required]],
    })
  }

  submitHomeDetail()
  {
    debugger;
    this.submitform=true;
    this.homeContactForm.value;
    console.log(this.homeContactForm.value);
    // this.submitform=false;
    this.homeContactForm.reset();
    // this.submitform=false;
  }

}
