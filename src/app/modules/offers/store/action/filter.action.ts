import { createAction, props } from "@ngrx/store";
import { FilterTypes } from "../types/action.types";

export const actionAddFilter = createAction(
	FilterTypes.Add_Filter,
	props<{tag: {
		title: string,
		id: string
	}}>()
)

export const actionRemoveFilter = createAction(
	FilterTypes.Remove_Filter,
	props<{id: string}>()
)

export const actionGetFilterList = createAction(
	FilterTypes.Get_Filter_List,
)