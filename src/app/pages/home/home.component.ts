import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectcount:number = 0
  accouratecount:number = 0
  experience:number=0
  awards:number=0
  projectcountstop:any = setInterval(()=>{
    this.projectcount++
    if(this.projectcount==287)
    {
      clearInterval(this.projectcountstop);
    }
  },10);


  accouratecountstop:any = setInterval(()=>{
    this.accouratecount++
    if(this.accouratecount==500)
    {
      clearInterval(this.accouratecountstop);
    }
  },10);


  experiencestop:any = setInterval(()=>{
    this.experience++
    if(this.experience==7)
    {
      clearInterval(this.experiencestop);
    }
  },500);

  awardsstop:any = setInterval(()=>{
    this.awards++
    if(this.awards==22)
    {
      clearInterval(this.awardsstop);
    }
  },500);

  homeContactForm:FormGroup;

submitform:boolean=false;

  constructor(private fb: FormBuilder, private mainService:MainService, private route:ActivatedRoute) { }

  storedata:any
  getData()
  {
  
    this.mainService.getAll('obj').subscribe((res)=>
    {
      this.storedata=res;
      console.log("test")
console.log(res);
    })
  }

  DeletebyId(data:any)
  {
    alert(data)
this.mainService.deletebyId(data).subscribe((res)=>
{
  alert("successfully delte");
  this.getData();
})
  }

  // BookDelete(bookid:string){
  //   this.bookservice.BookDelete(bookid)
  //   .subscribe(book=>{
  //     this.getsoftBooks();
  //   })
  // }

  ngOnInit(): void {

    this.checkValidation();
    this.getData();
    this.route.queryParams.subscribe(queryParams=>{
      console.log(queryParams)
    })
  }

  checkValidation()
  {
    this.homeContactForm=this.fb.group({
      // fullname: ["", [Validators.required , Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]')]],
 // subject: ["", [Validators.required,Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]')]],
      fullname: ["", [Validators.required , Validators.minLength(3), Validators.maxLength(30)]],
      email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
     
      subject: ["", [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
      message: ["", [Validators.required]],
    })
  }

  submitHomeDetail()
  {
    debugger;
    this.submitform=true;
    this.homeContactForm.value;
    console.log(this.homeContactForm.value);
    // this.submitform=false;
    this.homeContactForm.reset();
    // this.submitform=false;
  }

}
