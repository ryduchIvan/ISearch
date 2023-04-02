import { createAction, props } from "@ngrx/store";
import { ITag, ITagWithKind } from "app/modules/shared/types/tag.interface";
import { FilterTypes } from "../types/action.types";
import { IFilterList } from "../../types/filter/filter.interface";

export const actionAddFilter = createAction(
	FilterTypes.Add_Filter,
	props<{tag: ITag, kind: string}>()
)

export const addFilterSuccess = createAction(
	FilterTypes.Add_Filter_Success,
	props<{filtres: {
		tags: ITagWithKind[],
		filterList: IFilterList[]
	}}>()
)

export const actionRemoveFilter = createAction(
	FilterTypes.Remove_Filter,
	props<{tag: ITagWithKind}>()
)

export const removeFilterSuccess = createAction(
	FilterTypes.Remove_Filter_Success,
	props<{filtres: {
		tags: ITagWithKind[],
		filterList: IFilterList[]
	}}>()
)

export const actionRemoveAllFilter = createAction(
	FilterTypes.Remove_All_Filter,
	props<{tags: ITagWithKind[]}>()
)

export const removeAllFilterSuccess = createAction(
	FilterTypes.Remove_All_Filter_Success,
	props<{filtres: {
		tags: ITagWithKind[],
		filterList: IFilterList[]
	}}>()
)

export const actionGetFilterList = createAction(
	FilterTypes.Get_Filter_List,
)