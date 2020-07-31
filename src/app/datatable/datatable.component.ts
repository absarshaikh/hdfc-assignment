import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { AlertService } from '../components/alert-box/alert.service';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @ViewChild('modal') modal:ElementRef;
  table;
  showModal=false
   form:any={}
  selectedCol:any={};
  updateFlg=false;
  tableData
  constructor(public commonService:CommonService,
    public router:Router,
    public alertService:AlertService) { }

  ngOnInit(): void {
    this.commonService.getter().subscribe(res =>
      this.table = res
    );

    
  }
  
  selected(col){
    this.selectedCol=col
    console.log(col)
  }
  check(){
    console.log(this.table)
  }
  delete(){
    if(this.selectedCol.age==undefined){
      this.alertService.confirmThis('Please select a row to be deleted', 'Ok', '', () => {
       }, () => { });
       return false
    }
    
    this.alertService.confirmThis('Are you sure you want to delete the record', 'Yes', 'Cancel', () => {

      // this.commonService.settter('Blank');
      // this.table=[];
      var index = this.table.indexOf(this.selectedCol);
      this.table.splice(index, 1);
      this.alertService.confirmThis('Data deleted successfully', 'Ok', '', () => {
       
       }, () => { });
     }, () => { });
  }
  update(){
    if(this.selectedCol.age==undefined){
      this.alertService.confirmThis('Please select a row to be updated', 'Ok', '', () => {
      }, () => { });
      return false
    }

    console.log(this.selectedCol)
    
    this.alertService.confirmThis('Are you sure you want to update the record', 'Yes', 'Cancel', () => {
      this.showModal=true
      this.form.age=this.selectedCol.age
      this.form.lname=this.selectedCol.lname
      this.form.fname=this.selectedCol.fname
     

     }, () => { });

  }
  save(){
      var index = this.table.indexOf(this.selectedCol);
      this.table.splice(index, 1);
      this.table.push(this.form)
      this.commonService.settter(this.table);
      this.showModal=false
       this.alertService.confirmThis('Data updated successfully', 'Ok', '', () => {
      }, () => { });
  }

}
