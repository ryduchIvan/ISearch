import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITag, ITagWithKind } from 'app/modules/shared/types/tag.interface';
import { Observable, Subscription } from 'rxjs';
import { filterListSelector, filterTagsSelector } from '../../store/selector';
import { actionOfferSearch } from '../../store/action/offer.action';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  $filterList: Observable<any>;
  $storeTags!: Observable<ITagWithKind[]>;
  isTagPanel: boolean = false 
  search: string = "";
  searchedOffers: ITagWithKind[] = [];
  constructor(private store: Store){
    this.$storeTags = this.store.pipe(select(filterTagsSelector)) as Observable<ITagWithKind[]>;
    this.$filterList = this.store.pipe(select(filterListSelector)) as Observable<any>;
  }

  ngOnInit(): void {
    this.$storeTags.subscribe(storeTag => {
      this.isTagPanel = storeTag.length > 0
    })
  }

  searchOffer(event: any){
    const searchTerm = (event.target as HTMLInputElement).value;

    this.search = searchTerm
  }
}
