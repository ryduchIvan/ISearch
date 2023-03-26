import { ITag, ITagWithKind } from "app/modules/shared/types/tag.interface";
import { IFilterList } from "../../types/filter/filter.interface";
import { IOffer } from "../../types/offer.interface";

export interface IofferInitialState {
	offers: IOffer[],
	filters: {
		tags: ITagWithKind[],
		filterList: IFilterList[]
	}
}

export enum FilterTypes{
	Add_Filter = "[FILTER] Adding",
	Remove_Filter = "[FILTER] Removing",
	Get_Filter_List = "[FILTER] Getting"
}

export enum OfferTypes{
	Search_Offer = "[OFFER] Searching"
}