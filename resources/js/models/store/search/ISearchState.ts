import { ItemPaginator } from "../../../../../graphql/generated";

export interface ISearchState {
    itemPaginator: ItemPaginator
    query: string
}
