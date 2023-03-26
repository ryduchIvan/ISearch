import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IOffer } from '../../types/offer.interface';
import { offersSelector } from '../../store/selector';
@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent {
  $offers: Observable<IOffer[]>

  constructor(private store: Store){
    this.$offers = this.store.pipe(select(offersSelector)) as Observable<IOffer[]>
  }
}
