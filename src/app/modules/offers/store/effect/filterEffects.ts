//Здесь все еффекти данного модуля
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { FilterTypes } from '../types/action.types';
import { actionAddFilter, actionRemoveAllFilter, actionRemoveFilter, addFilterSuccess, removeAllFilterSuccess, removeFilterSuccess } from '../action/filter.action';
import { EFilterKind } from '../../types/filter/filter.enums';
import { filterListSelector, filtersSelector, offersSelector } from '../selector';
import { of } from 'rxjs';
import { ITagWithKind } from 'app/modules/shared/types/tag.interface';

@Injectable()
export class FilterEffects {
	
	constructor(
		private actions$: Actions,
		private store: Store
	  ) {}
	

	addFilter$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(actionAddFilter),
			withLatestFrom(this.store.pipe(select(filtersSelector))),
			switchMap(([action, filters]) => {

				const newTag = {
					title: action.tag.title,
					id: action.tag.id,
					kind: action.kind
				}

				let enumKey = action.kind.replace(/\s+/g, "_").toUpperCase() as keyof typeof EFilterKind;
				let newTags: ITagWithKind[] = [...filters.tags, newTag];
				let newFilterList = filters.filterList.map(item => {
					if (item.kind === EFilterKind[enumKey]) {
						item = {
							kind: item.kind,
							tags: item.tags.filter(item => item.id !== action.tag.id)
						}
					}

					return item
				})

				return of(addFilterSuccess({
					filtres: {
						tags: newTags,
						filterList: newFilterList
					}
				}))
			})
		)
	})

	removeFilter$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(actionRemoveFilter),
			withLatestFrom(this.store.pipe(select(filtersSelector))),
			switchMap(([action, filters]) => {
				let enumKey = action.tag.kind.replace(/\s+/g, "_").toUpperCase() as keyof typeof EFilterKind;
				let newTags = filters.tags.filter(item => item.id !== action.tag.id);
				let filterList = filters.filterList.map(item =>{
					if (item.kind === EFilterKind[enumKey]) {
						const newTags = [action.tag, ...item.tags]

						return {...item, tags: newTags}
					}
					return item
				})

				return of(removeFilterSuccess({
					filtres: {
						tags: newTags,
						filterList: filterList
					}
				}))
			})
		)
	})

	removeAllFilter$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(actionRemoveAllFilter),
			withLatestFrom(this.store.pipe(select(filterListSelector))),
			switchMap(([action, filters]) => {
				let filterList = filters.map(item => {
					action.tags.forEach(tag => {
						
						let tagWithoutKind: any= {
							title: tag.title,
							id: tag.id
						}

						if (tag.kind === item.kind) {
							const newItem = {
								...item,
								tags: [...item.tags, tagWithoutKind]
							}
							item = newItem
						}
					})
					return item
				})

				return of(removeAllFilterSuccess({
					filtres: {
						tags: [],
						filterList
					}
				}))
			})
		)
	})
}