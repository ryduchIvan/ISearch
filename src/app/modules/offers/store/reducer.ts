import { Action, createReducer, on } from "@ngrx/store";
import { actionAddFilter, actionGetFilterList, actionRemoveFilter } from "./action/filter.action";
import { IofferInitialState } from "./types/action.types";
import * as uniqId from 'uniqid'
import { EFilterKind } from "../types/filter/filter.enums";
import { actionOfferSearch } from "./action/offer.action";
const initialState: IofferInitialState = {
	offers: [
		{
			title: ".NET Infrastructure Developer",
			description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects. The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects. The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects. The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
			benefits: ["Remote", "Medical insurance", "High salary", "Remote", "Medical insurance", "High salary"],
			company: {
			  logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
			  name: "Luxoft",
			  date: "05.20.2023"
			}
		  },
		  {
			title: "React",
			description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
			benefits: ["Remote", "Medical insurance", "High salary"],
			company: {
			  logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
			  name: "Luxoft",
			  date: "05.20.2023"
			}
		  },
		  {
			title: "Vue",
			description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
			benefits: ["Remote", "Medical insurance", "High salary"],
			company: {
			  logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
			  name: "Luxoft",
			  date: "05.20.2023"
			}
		  },
		  {
			title: "Java",
			description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
			benefits: ["Remote", "Medical insurance", "High salary"],
			company: {
			  logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
			  name: "Luxoft",
			  date: "05.20.2023"
			}
		  },
		  {
			title: "Ruby",
			description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
			benefits: ["Remote", "Medical insurance", "High salary"],
			company: {
			  logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
			  name: "Luxoft",
			  date: "05.20.2023"
			}
		  }
	],
	filters: {
		tags: [
			{
				title: "Java",
				id: uniqId(),
				kind: "Search by location"
			},
			{
				title: "Java",
				id: uniqId(),
				kind: "Search by location"
			},
			{
				title: "Java",
				id: uniqId(),
				kind: "Search by location"
			},			{
				title: "Java",
				id: uniqId(),
				kind: "Search by location"
			},
			{
				title: "Java",
				id: uniqId(),
				kind: "Search by location"
			}
		],
		filterList: [
			{
				kind: "Search by languages",
				tags: [
				  {
					title: "Java",
					id: uniqId()
				  },
				  {
					title: "C#/.NET",
					id: uniqId()
				  },
				  {
					title: "JS",
					id: uniqId()
				  },
				  {
					title: "TS",
					id: uniqId()
				  },
				  {
					title: "Python",
					id: uniqId()
				  },
				  {
					title: "C++",
					id: uniqId()
				  },
				  {
					title: "C",
					id: uniqId()
				  },
				  {
					title: "Swift",
					id: uniqId()
				  },
				  {
					title: "Dart",
					id: uniqId()
				  },
				  {
					title: "PHP",
					id: uniqId()
				  },
				]
			  },
			  {
				kind: "Search by experiance",
				tags: [
				  {
					title: "No experience",
					id: uniqId()
				  },
				  {
					title: "0-1",
					id: uniqId()
				  },
				  {
					title: "1-3",
					id: uniqId()
				  },
				  {
					title: "3-5",
					id: uniqId()
				  },
				  {
					title: "5+",
					id: uniqId()
				  },
				]
			  },
			  {
				kind: "Search by location",
				tags: [
				  {
					title: "Remote",
					id: uniqId()
				  },
				  {
					title: "Europe",
					id: uniqId()
				  },
				  {
					title: "Asia",
					id: uniqId()
				  },
				  {
					title: "Ocenia",
					id: uniqId()
				  },
				  {
					title: "North America",
					id: uniqId()
				  },
				  {
					title: "South America",
					id: uniqId()
				  },
				]
			  },
			  {
				kind: "Search by TOP company",
				tags: [
				  {
					title: "Intellians",
					id: uniqId()
				  },
				  {
					title: "Genesis",
					id: uniqId()
				  },
				  {
					title: "Sigma Software",
					id: uniqId()
				  },
				  {
					title: "ZONE3000",
					id: uniqId()
				  },
				  {
					title: "NI-IX",
					id: uniqId()
				  },
				  {
					title: "ELEKS",
					id: uniqId()
				  },
				]
			  },
		]
	}
}

const offersReducer = createReducer(
	initialState,
	on(
		actionAddFilter,
		(state, action) => {
			const newData = {
				title: action.tag.title,
				id: action.tag.id,
				kind: action.kind
			}
			let enumKey = action.kind.replace(/\s+/g, "_").toUpperCase() as keyof typeof EFilterKind
			return 	{
				...state,
				filters: {
					tags: [...state.filters.tags, newData],
					filterList: state.filters.filterList.map((item) => {
						if (item.kind === EFilterKind[enumKey]) {
							item = {
								kind: item.kind,
								tags: item.tags.filter(item => item.id !== action.tag.id)
							}
						}
						return item
					})
				}
			}
		}
	),
	on(
		actionRemoveFilter,
		(state, action) => {
			console.log(action)
			let enumKey = action.tag.kind.replace(/\s+/g, "_").toUpperCase() as keyof typeof EFilterKind
			return {
				...state,
				filters: {
					tags: state.filters.tags.filter(item => item.id !== action.tag.id),
					filterList: state.filters.filterList.map(item =>{
						if (item.kind === EFilterKind[enumKey]) {
							const newTags = [action.tag, ...item.tags]
	
							return {...item, tags: newTags}
						}
						return item
					})
				}
			}
		}
	),
	on(
		actionGetFilterList,
		(state) => ({
			...state
			///
		})
	),
	on(
		actionOfferSearch,
		(state, action) => {
			console.log(action.title)
			return {
				...state,
				offers: state.offers.filter(item => {
					return item.title.includes(action.title)
				})
			}
		}
	)
)

export function reducersOffers(state: IofferInitialState, action: Action){
	return offersReducer(state, action)
}