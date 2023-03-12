import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IofferInitialState } from "./types/action.types";

export const FeatureSelector = createFeatureSelector<IofferInitialState>("offers");

export const offersSelector = createSelector(
  FeatureSelector,
  state => state.offers
);

export const filtersSelector = createSelector(
  FeatureSelector,
  state => state.filters || { tags: [] }
);

export const tagsSelector = createSelector(
  filtersSelector,
  filters => filters.tags || []
);