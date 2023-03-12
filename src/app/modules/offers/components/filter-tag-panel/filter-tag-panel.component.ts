import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITag } from 'app/modules/shared/types/tag.interface';
import { actionRemoveFilter } from '../../store/action/filter.action';

@Component({
  selector: 'app-filter-tag-panel',
  templateUrl: './filter-tag-panel.component.html',
  styleUrls: ['./filter-tag-panel.component.scss']
})
export class FilterTagPanelComponent {
  @Input () tags: ITag[] | null

  constructor(private store: Store){

  }

  removeFilterTag(id: string){
    console.log(id)
    this.store.dispatch(actionRemoveFilter({
      id: id
    }))
  }
}
