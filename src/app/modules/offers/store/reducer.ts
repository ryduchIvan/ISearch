import { Action, createReducer, on } from "@ngrx/store";
import { actionAddFilter, actionGetFilterList, actionRemoveAllFilter, actionRemoveFilter, addFilterSuccess, removeAllFilterSuccess, removeFilterSuccess } from "./action/filter.action";
import { IofferInitialState } from "./types/action.types";
import * as uniqId from 'uniqid'
import { EFilterKind } from "../types/filter/filter.enums";
import { actionOfferSearch, offerSearchSuccess } from "./action/offer.action";
import { ITag } from "app/modules/shared/types/tag.interface";
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
		addFilterSuccess,
		(state, action) => {
			return {
				...state,
				filters: action.filtres
			}
		}
	),
	on(
		removeFilterSuccess,
		(state, action) => {
			return{
				...state,
				filters: action.filtres
			}
		}
	),
	on(
		removeAllFilterSuccess,
		(state, action) => {
			return {
				...state,
				filters: action.filtres
			}
		}
	),
	on(
		offerSearchSuccess,
		(state, action) => {
			return {
				...state,
				offers: action.searchedOffers
			}
		}
	)
)

export function reducersOffers(state: IofferInitialState, action: Action){
	return offersReducer(state, action)
}