import { Action, createReducer, on } from "@ngrx/store";
import { actionAddFilter, actionGetFilterList, actionRemoveFilter } from "./action/filter.action";
import { IofferInitialState } from "./types/action.types";

const initialState: IofferInitialState = {
	offers: [],
	filters: {
		tags: []
	}
}

const offersReducer = createReducer(
	initialState,
	on(
		actionAddFilter,
		(state, action) => ({
			...state,
			filters:{
				tags: [...state.filters.tags, action.tag]
			}
		})
	),
	on(
		actionRemoveFilter,
		(state, action) => ({
			...state,
			filters: {
				tags: state.filters.tags.filter(item => item.id !== action.id)
			}
		})
	),
	on(
		actionGetFilterList,
		(state) => ({
			...state
			///
		})
	)
)

export function reducersOffers(state: IofferInitialState, action: Action){
	return offersReducer(state, action)
}