import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' ;
import {Router} from '@angular/router' ; 
import {FormBuilder , Validators} from '@angular/forms';
import {SvcService} from '../svc.service' ;  

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  
  id  ;
  empList= [] ;
  index = -1 ;   

  constructor(
    public svc : SvcService,
    public route:ActivatedRoute,
    public router:Router, 
  ) { }

  ngOnInit(): void {
    this.svc.empBS.subscribe(data =>{
      this.empList = data ; 
    }) ; 
    this.id = this.route.snapshot.paramMap.get('id') ;

    for(var i = 0 ; i < this.empList.length ; i++){
      if(this.empList[i].id === this.id){
        this.index = i ; 
        break ; 
      }
    }
  }

  onSubmit(data){
    this.svc.editEmp(this.id , data)  ; 
    this.router.navigate(['show-list']);
  }

}
