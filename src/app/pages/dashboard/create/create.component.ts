import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

errormsg:any;

  ngOnInit(): void {
  }

userForm = new FormGroup({
  'fullname':new FormControl('',Validators.required),
  'email':new FormControl('',Validators.required)
});

userSubmit()
{
  if(this.userForm.valid)
  {
    console.log(this.userForm.value);
    this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'res==>');
    });
  }
  else{
    console.log('all field is required')
  }
}

}
