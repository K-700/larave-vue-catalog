import { rootStore, dispatchModuleAction, moduleGetter } from '../root'
import { ISearchState } from "../../models/store/search";
import { StoreModuleNames } from "../../models/store/module-names/StoreModuleNames";

const searchStore = {
    get state(): ISearchState {
        return rootStore.state.searchState
    },
    getter<T>(getterName: string): T {
        return moduleGetter(StoreModuleNames.searchState, getterName)
    },
    action<T, R>(actionName: string, params?: T): Promise<R> {
        return dispatchModuleAction(StoreModuleNames.searchState, actionName, params)
    }
}
export const useSearchStore = () => {
    return searchStore
}
