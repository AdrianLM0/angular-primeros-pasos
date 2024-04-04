import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl:"list.component.html",
  styleUrl: './list.component.css',
})
export class ListComponent {



  @Input()
  public characterList :Character[]=[{name:'Trunks',power:10}]

  @Output()
  public onDelete:EventEmitter<number>=new EventEmitter();

  onDeleteCharacter(index:number){

    this.onDelete.emit(index);
  }

}
