import { initialRootState } from './initialState'
import { IRootState, RootStore } from "../../models/store";
import { createStore, DispatchOptions, StoreOptions } from "vuex";
// Импортируем каждый Vuex-модуль.
import { searchState } from "../search/module";
// Опции хранилища Vuex для создания модульного хранилища с пространством имён
const storeOptions: StoreOptions<IRootState> = {
    state: initialRootState,
    modules: {
        searchState
    }
}
export const rootStore: RootStore<IRootState> = <any>createStore(storeOptions)

// Закрытая вспомогательная функция для отправки действия в Vuex-модуль, поэтому формируем его при помощи строковой интерполяции `${moduleName}/${actionName}`.
export function dispatchModuleAction<T, R>(modulePath: string | string[], actionName: string, params?: T, options?: DispatchOptions): Promise<R> {
    if (Array.isArray(modulePath)) {
        modulePath = modulePath.join('/')
    }
    // Переименуем store.dispatch в rootStore.dispatch
    return rootStore.dispatch(`${modulePath}/${actionName}`, params, options)
}

export function moduleGetter<T>(moduleName: string, getterName: string): T {
    return rootStore.getters[`${moduleName}/${getterName}`]
}

export function useStore() {
    return rootStore
}
