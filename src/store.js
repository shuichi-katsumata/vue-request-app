import { createStore } from "vuex";

export const store = createStore({
    state: ()=> {
        return {
            page:0
        }
    },
    mutations: {
        set_page: (state, p)=> {
            state.page = p;
        }
    }
})