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
	Add_Filter_Success = "[Filter] Adding success",
	Remove_Filter = "[FILTER] Removing",
	Remove_Filter_Success = "[FILTER] Removing success",
	Remove_All_Filter = "[FILTER] Removing all",
	Remove_All_Filter_Success = "[FILTER] Removing all success",
	Get_Filter_List = "[FILTER] Getting"
}

export enum OfferTypes{
	Search_Offer = "[OFFER] Searching",
	Search__Offer__Success = "[OFFER] Searching success"
}