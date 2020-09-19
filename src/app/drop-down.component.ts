import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  // styles: [`h1 { font-family: Lato; }`]
})
export class DropDownComponent implements OnInit {
  val : string[] = ["Jim" , "Ron" , "Jack"];
  dict : string[] = ["apple" ,"ape", "art" , "axe" , "ball" , "bat" , "brick","branch" , "cat" , "catch" , "cap"];
  typeAhead(inp:string){
    
  }
  constructor(){}
  ngOnInit(){}
}