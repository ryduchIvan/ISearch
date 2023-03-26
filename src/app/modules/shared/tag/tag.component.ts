import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionAddFilter, actionRemoveFilter } from 'app/modules/offers/store/action/filter.action';
import { ITag } from '../types/tag.interface';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input () title: string
  @Input () id: string
  @Input () action: string
  @Input () isClose: boolean
  @Input () variant: "dark" | "light"
  @Input () kind: string
  @Output () addTag = new EventEmitter<ITag>()
  @Output () removeTag = new EventEmitter<any>()
  
  add(){
    let newTag: ITag = {
      title: this.title,
      id: this.id
    }
    
    this.addTag.emit(newTag)
  }
  remove(event: Event){
    let tagForRemove = {
      title:this.title,
      id: this.id,
      kind: this.kind
    }
    this.removeTag.emit(tagForRemove)

    event.stopPropagation()
  }
}
