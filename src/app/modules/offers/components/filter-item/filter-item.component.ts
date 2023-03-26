import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITag } from 'app/modules/shared/types/tag.interface';
import { actionAddFilter, actionRemoveFilter } from '../../store/action/filter.action';
import { IFilterList } from '../../types/filter/filter.interface';
@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent {

    @Input () data: IFilterList
    @Input () id: number
    constructor(private store: Store){

    }

    addFilterTag(tag: ITag){
      let correctKind = this.data.kind.replace(/\s+/g, "_").toUpperCase()
      this.store.dispatch(actionAddFilter({
        tag: tag,
        kind: correctKind
      }))
    }

}
