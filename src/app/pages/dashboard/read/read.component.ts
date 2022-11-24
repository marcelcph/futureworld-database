import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;

  ngOnInit(): void {
    this.getAllData();
    }


  // getdeleteid
  deleteID(id:any)
  {
    console.log(id,'deleteID==>');
    this.service.deleteData(id).subscribe((res)=>{
        console.log(res,'deleteres==>');
        this.getAllData();
    });
  }
// getData
  getAllData()
  {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
        this.readData = res.data;
    });
  }
}
