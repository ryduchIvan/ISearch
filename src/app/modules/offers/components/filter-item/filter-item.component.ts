import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITag } from 'app/modules/shared/types/tag.interface';
import { actionAddFilter, actionRemoveFilter } from '../../store/action/filter.action';
@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent {
    items = ['Sort by language', 'Sory by experiance', 'Sort by location', 'Sort by company'];

    @Input () data: any
    @Input () id: number
    constructor(private store: Store){

    }

    addFilterTag(data: ITag){
      this.store.dispatch(actionAddFilter({
        tag: data
      }))
    }

}
