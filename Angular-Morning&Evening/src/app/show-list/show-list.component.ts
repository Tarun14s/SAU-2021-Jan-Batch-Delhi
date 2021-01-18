import { Component, OnInit , OnChanges, ChangeDetectorRef } from '@angular/core';
import { SvcService } from '../svc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit  {
 
  empList = [] ; 

  constructor(
    public svc : SvcService,
    private cd: ChangeDetectorRef,
    public router:Router,
  ) { }

  ngOnInit(): void {
    this.svc.empBS.subscribe(data =>{
      this.empList = data ; 
    }) ; 
    console.log("This is child component" , JSON.stringify(this.empList)) ; 
  }


  deleteEmp(i){
    this.svc.deleteEmp(i) ; 
    this.empList = this.svc.emp ;
    this.cd.detectChanges(); 
  }

 editEmp(id){
  this.router.navigate(['edit-emp' , id]);
 }

}
