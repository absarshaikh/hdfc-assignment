import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { AlertService } from '../components/alert-box/alert.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  table:any={}
  constructor(public commonService:CommonService,
    public router:Router,
    public alertService:AlertService) { }

  ngOnInit(): void {
    this.commonService.getter().subscribe(res =>
      this.table = res
    );
    
    if(this.table==='Blank'){
      this.router.navigateByUrl('landing')
    }
    console.log(this.table)
    
  }
  delete(){
    this.alertService.confirmThis('Are you sure you want to delete the record', 'Yes', 'Cancel', () => {
      this.commonService.settter('Blank');
      this.table=[];
      this.alertService.confirmThis('Data deleted successfully', 'Ok', '', () => {
       
       }, () => { });
     }, () => { });
  }
  update(){
    this.alertService.confirmThis('Are you sure you want to update the record', 'Yes', 'Cancel', () => {
      this.router.navigateByUrl('landing')
     }, () => { });

  }

}
