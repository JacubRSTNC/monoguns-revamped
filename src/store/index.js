import { createStore } from 'vuex'

export default createStore({
  state: {
    items: {},
    materials: {},
    itemsToCraft: {}
  },
  mutations: {
    changeItemAmount(state, payload) {
      let item = payload.item;
      let amount = payload.amount;
      console.log(item + " " + toString(amount));
      if (!state.itemsToCraft[item]) {
        state.itemsToCraft[item] = amount
      } else {
        state.itemsToCraft[item] += amount;
      }
    },
    setItems(state, payload) {
       let items = payload;
       state.items = items;
    },
    setMaterials(state,payload) {
      let materials = payload;
      state.materials = materials;
    }
  },
  getters: {
    getItem: (state) => (item) => {
      let rItem = state.items[item];
      rItem.identifier = item;
      return rItem;
    }
  },
  actions: {
  },
  modules: {
  }
})
