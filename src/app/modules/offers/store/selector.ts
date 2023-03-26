import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IofferInitialState } from "./types/action.types";

export const FeatureSelector = createFeatureSelector<IofferInitialState>("offers");

export const offersSelector = createSelector(
  FeatureSelector,
  state => state.offers
);

export const filtersSelector = createSelector(
  FeatureSelector,
  state => state.filters
);

export const filterTagsSelector = createSelector(
  filtersSelector,
  filters => filters.tags
);

export const filterListSelector = createSelector(
  filtersSelector,
  filters => filters.filterList
);