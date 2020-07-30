import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { AlertService } from '../components/alert-box/alert.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  // form=[];
  form:any={}
  tableData=[]
  loadData
  flg=false
  constructor(public commonService:CommonService,
    public router:Router,
    public alertService:AlertService) { }

  ngOnInit(): void {
    this.commonService.getter().subscribe(res =>
      this.loadData = res
    );
    console.log(this.loadData)

    if(this.loadData != "Blank"){
      console.log('1')
      this.form.lname=this.loadData[0].lname
      this.form.fname=this.loadData[0].fname
      this.form.age=this.loadData[0].age
    }else{
      this.flg=true
    }
  }
  save(){
    console.log(this.flg)
    this.tableData.push(this.form)
    this.commonService.settter(this.tableData);
    var msg=""
    console.log(this.loadData)
    if(this.flg){
      msg='Data added Successfully'
    }else{
      msg='Data updated Successfully'
    }
    this.alertService.confirmThis(msg, 'Ok', '', () => {
      this.router.navigateByUrl('table')
     }, () => { });
    // this.router.navigateByUrl('table');
  }
}
