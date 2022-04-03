import { Module, MutationTree, ActionTree } from "vuex";

import { IRootState } from "../../models/store";
import { initialSearchState } from "./initialState";
import { ISearchState } from "../../models/store/search";
import { ItemPaginator, useSearchItemsQuery } from "../../../../graphql/generated";
import { MutationType } from "../../models/store/mutation-type/MutationType";
import { useResult } from "@vue/apollo-composable";
import { watch } from "vue";

export const mutations: MutationTree<ISearchState> = {
    setItemPaginator(state, itemPaginator: ItemPaginator) {
        state.itemPaginator = itemPaginator
    },
    setQuery(state, query: string) {
        state.query = query
    },
}

export const actions: ActionTree<ISearchState, IRootState> = {
    async loadItems({ commit }, { query, first, page }: { query:string, first: number, page: number }) {
        commit(MutationType.search.setQuery, query)

        const { result } = useSearchItemsQuery({
            query: query,
            first: first,
            page: page,
        })
        const itemPaginator = useResult(result, null, data => data.search)
        watch(itemPaginator, () => commit(MutationType.search.setItemPaginator, itemPaginator))
    }
}

const namespaced: boolean = true
const state: ISearchState = initialSearchState
export const searchState: Module<ISearchState, IRootState> = {
    namespaced,
    state,
    actions,
    mutations
}
