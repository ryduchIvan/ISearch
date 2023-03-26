import { createAction , props} from "@ngrx/store";
import { OfferTypes } from "../types/action.types";

export const actionOfferSearch = createAction(
	OfferTypes.Search_Offer,
	props<{
		title: string
	}>()
)