import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  registrationForm: FormGroup
  constructor( private fb:FormBuilder ){}

  ngOnInit() {
    
    this.registrationForm = this.fb.group({
      name:[' ', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
      email:[],
      number:[],
      city:[''],
      designation:['']
    });
  }
  submit() {
    console.log(this.registrationForm.value);
  }
}
