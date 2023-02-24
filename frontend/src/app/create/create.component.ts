import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }
  errormsg: any;


  ngOnInit(): void {

  }

  userForm = new FormGroup({

    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required),

  });

  userSubmit() {

    if (this.userForm.valid) {

      console.log(this.userForm.value);


    }

    else {
      this.errormsg = 'Please fill all fields';
    }

  }
}