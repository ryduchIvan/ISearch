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
  @Output () addTag = new EventEmitter<ITag>()
  @Output () removeTag = new EventEmitter<any>()
  add(){
    let tagData: ITag = {
      title: this.title,
      id: this.id
    }

    this.addTag.emit(tagData)
  }
  remove(event: Event){
    this.removeTag.emit(this.id)

    event.stopPropagation()
  }
}
