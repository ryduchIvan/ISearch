import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITag, ITagWithKind } from 'app/modules/shared/types/tag.interface';
import { actionRemoveAllFilter, actionRemoveFilter } from '../../store/action/filter.action';

@Component({
  selector: 'app-filter-tag-panel',
  templateUrl: './filter-tag-panel.component.html',
  styleUrls: ['./filter-tag-panel.component.scss']
})
export class FilterTagPanelComponent {
  @Input () tags: ITagWithKind[] | null

  constructor(private store: Store){

  }

  removeFilterTag(tag: ITagWithKind){
    this.store.dispatch(actionRemoveFilter({
      tag: tag
    }))
  }

  closeTagPanel(){
    console.log("Путин")
    this.store.dispatch(actionRemoveAllFilter({
      tags: this.tags as ITagWithKind[]
    }))
  }
}
