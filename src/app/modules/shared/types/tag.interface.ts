export interface ITag {
	title: string,
	id: string
}

export interface ITagWithKind extends ITag {
	kind:string
}