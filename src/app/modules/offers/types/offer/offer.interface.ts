export interface IOffer {
	title: string,
	description: string,
	benefits: string[],
	company: {
		logo: string,
		name: string,
		date: string
	}
}