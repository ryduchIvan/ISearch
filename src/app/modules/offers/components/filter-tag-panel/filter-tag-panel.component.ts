import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITag, ITagWithKind } from 'app/modules/shared/types/tag.interface';
import { actionRemoveFilter } from '../../store/action/filter.action';

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
    console.log(this.tags)
    this.store.dispatch(actionRemoveFilter({
      tag: tag
    }))
  }
}
