import { ITag } from "app/modules/shared/types/tag.interface"

export interface IFilterList {
	kind: string,
	tags: ITag[]
}
