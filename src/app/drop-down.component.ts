import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  // styles: [`h1 { font-family: Lato; }`]
})
export class DropDownComponent implements OnInit {
  // val : string[] = ["Jim" , "Ron" , "Jack"];
  val:string[];
  dict : string[] = ["apple" ,"ape", "art" , "axe" , "ball" , "bat" , "brick","branch" , "cat" , "catch" , "cap"];
  temp:string;
  s:string;

   search(event:any){
    this.s = event.target.value;
    
    this.val = this.dict.filter((el)=>{
      // console.log("s = " , this.s);
      let reg:any = new RegExp("^"+this.s);
      return reg.test(el);
    });
  }

  constructor(){
    // var temp:string;
  }
  ngOnInit(){}
}