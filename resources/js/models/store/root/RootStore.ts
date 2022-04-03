import Vuex from 'vuex'
import { IRootStore } from "./IRootStore";

export class RootStore<S> extends Vuex.Store<IRootStore> {}
