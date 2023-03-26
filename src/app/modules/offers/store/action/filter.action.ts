import { createAction, props } from "@ngrx/store";
import { ITag, ITagWithKind } from "app/modules/shared/types/tag.interface";
import { FilterTypes } from "../types/action.types";

export const actionAddFilter = createAction(
	FilterTypes.Add_Filter,
	props<{tag: ITag, kind: string}>()
)

export const actionRemoveFilter = createAction(
	FilterTypes.Remove_Filter,
	props<{tag: ITagWithKind}>()
)

export const actionGetFilterList = createAction(
	FilterTypes.Get_Filter_List,
)