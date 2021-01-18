import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvcService {

  emp =[] ; 
  empBS = new BehaviorSubject([]) ; 
  obs = this.empBS.asObservable() ;  
  constructor() { }

  addEmp(empData){
    empData['isDisplayed'] = false ;
    this.emp.push(empData) ;  
    this.empBS.next(this.emp) ;  
    console.log("service" , this.emp) ; 
  }

  deleteEmp(id){
    let index = -1 ; 
    for(let i = 0 ; i < this.emp.length ; i++){
      if(this.emp[i].id === id){
        index = i ; 
        break ; 
      }
    }

    if (index > -1) {
      this.emp.splice(index, 1);
      console.log("emp deleted in service") ; 
   }
   this.empBS.next(this.emp) ; 
  }

  editEmp(id , newEmp){
    let index = -1 ; 
    for(let i = 0 ; i < this.emp.length ; i++){
      if(this.emp[i].id === id){
        index = i ; 
        break ; 
      }
    }
    this.emp[index].id = newEmp.id ;
    this.emp[index].name = newEmp.name ; 
    this.emp[index].age = newEmp.age ; 
    this.emp[index].dob = newEmp.dob ;   

    this.empBS.next(this.emp) ; 

  }

}


