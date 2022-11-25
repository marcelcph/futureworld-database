import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }
getparamid:any;
succesmsg:any;
errormsg:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid)
    {
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res,'res==>');
        this.userForm.patchValue({
          title:res.data[0].title,
          imghero:res.data[0].imghero,
          resumetxt:res.data[0].resumetxt,
          subtitle:res.data[0].subtitle,
          content:res.data[0].content,
          content1:res.data[0].content1,
          content2:res.data[0].content2,
          imgcontent:res.data[0].imgcontent,
          quote:res.data[0].quote,
        })
      });
    }
  }

userForm = new FormGroup({
  'title':new FormControl('',Validators.required),
  'imghero':new FormControl('',Validators.required),
  'resumetxt':new FormControl('',Validators.required),
  'subtitle':new FormControl('',Validators.required),
  'content':new FormControl('',Validators.required),
  'content1':new FormControl('',Validators.required),
  'content2':new FormControl('',Validators.required),
  'imgcontent':new FormControl('',Validators.required),
  'quote':new FormControl('',Validators.required)
});


userSubmit()
{
  if(this.userForm.valid)
  {
    console.log(this.userForm.value);
    this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.userForm.reset();
    });
  }
  else{
    console.log('all field is required')
  }
}

//Update
userUpdate()
{
  console.log(this.userForm.value,'updatedform');
  if(this.userForm.valid){
    this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
      this.succesmsg=res.message
    });
  }else{
    this.errormsg = 'all fields are required'
  }
}

}
