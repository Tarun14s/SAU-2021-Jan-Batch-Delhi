import { Component } from '@angular/core';
import {FormBuilder , Validators} from '@angular/forms';
import { SvcService } from './svc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newApp';
  

  constructor(
    public svc:SvcService ,
    public router : Router,
  ){

  }

  onSubmit(data){
    this.svc.addEmp(data) ; 
  }

  navigate(){
    this.router.navigate(['show-list']) ; 
  }
}
