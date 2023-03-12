import { ITag } from "app/modules/shared/types/tag.interface";

export interface IofferInitialState {
	offers: any[],
	filters: {
		tags: ITag[]
	}
}

export enum FilterTypes{
	Add_Filter = "[FILTER] Adding",
	Remove_Filter = "[FILTER] Removing",
	Get_Filter_List = "[FILTER] Getting"
}