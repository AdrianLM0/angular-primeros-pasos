import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 public name:string="Ironman"
 public age:number=45

 public cambiarNombre(newName:string):void{
  this.name=newName;
 }

 public cambiarEdad(newAge:number):void{
  this.age=newAge;
 }

 get capitalizedName():string{
  return this.name.toUpperCase();
 }

 getHeroDescription():string{
  return this.name+"-"+this.age;
 }

 resetValues(){
  this.name="Ironman"
  this.age=45
 }

}
