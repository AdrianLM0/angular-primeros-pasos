import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class mainPageComponent {

constructor(private dbzService:DbzService){}

get characters():Character[]{
  return [...this.dbzService.misCharacters];

}

onDeleteCharacter(id:string):void{
this.dbzService.deleteCharacterById(id);
}

newCharacter(character:Character){
  this.dbzService.hayOnNewCharacter(character)
}


}
