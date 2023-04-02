import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { actionOfferSearch, offerSearchSuccess } from "../action/offer.action";
import { Observer, switchMap, withLatestFrom, of } from "rxjs";
import { select, Store } from "@ngrx/store";
import { offersSelector } from "../selector";
import { IOffer } from "../../types/offer.interface";

@Injectable()

export class OfferEffects {
	constructor(private actions$: Actions, private store: Store){

	}

	searchOffer$ = createEffect(() => {//создаем ефет 
		return this.actions$.pipe( //берем все екшени
			ofType(actionOfferSearch), //выбираем какой конкретно екшен 
			withLatestFrom(this.store.pipe(select(offersSelector))),//доступ к данным с которыми работаем
			switchMap(([action, offers]) => {//фнукция , которая получает массив аргументов , 1 - наш екшен , второй нашы данные
				let searchedOffers: IOffer[] = [];
				offers.forEach(item => {
					if (item.title.includes(action.title)) {
						searchedOffers.push(item)
					}
				})
				return of(offerSearchSuccess({//в конце возращем екшен с результатом 
					searchedOffers
				}))
			})
		)
	})
}
