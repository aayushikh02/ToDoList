import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css','../bootstrap.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  
  tasks=[];
 
  t={name:""};
  in:any;

  addtask(){
    this.tasks.push({name:this.t.name});
    console.log(this.tasks);
    this.t.name="";
  }


  edit(i){
    
    this.t.name=this.tasks[i].name;
    event.stopPropagation();
     this.in=i
  }

  updatetask(){
    
    this.tasks[this.in].name=this.t.name;
    this.t.name="";
  }

  delete(i){
    this.tasks.splice(i,1)
  }

  ngOnInit() {
  }

}
