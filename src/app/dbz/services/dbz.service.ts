import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import {v4}from 'uuid'
console.log(v4());


@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public misCharacters : Character[]=
[{id:v4(),name:'krilin',power:1000},
{id:v4(),name:'Goku',power:9500},
{id:v4(),name:'vegeta', power:7500}
];

hayOnNewCharacter(character:Character):void{
  const newCharacter:Character={
    id: v4(),...character}
  this.misCharacters.push(character);

}

// deleteCharacter(indice:number){
//   this.misCharacters.splice(indice,1);
// }

deleteCharacterById(id?:string ){
  if(!id)return;
  this.misCharacters=this.misCharacters.filter(character=>character.id!== id );
}

}
