import { createAction , props} from "@ngrx/store";
import { IOffer } from "../../types/offer.interface";
import { OfferTypes } from "../types/action.types";

export const actionOfferSearch = createAction(
	OfferTypes.Search_Offer,
	props<{
		title: string
	}>()
)

export const offerSearchSuccess = createAction(
	OfferTypes.Search__Offer__Success,
	props<{
		searchedOffers: IOffer[]
	}>()
)