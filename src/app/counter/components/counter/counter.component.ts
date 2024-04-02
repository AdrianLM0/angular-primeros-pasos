import { Component } from "@angular/core";

@Component({

  selector:'app-counter',
  template:`
  <h3>counter:{{counter}}</h3>
<button (click)="increaseBy(1)" >+1</button>
<button (click)="increaseBy(-1)" >-1</button>
<button (click)="reset()" >reset</button>
  `

})
export class CounterComponent{
  title = 'Mi primera app de angular';
  public counter:number=10;

  increaseBy(value:number):void{
    this.counter=this.counter+value;
  }

  reset():void{
    this.counter=10;
  }
}
