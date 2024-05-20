export const state = () => ({
  list: [],
})

export const mutations = {
  setList(state, list) {
    state.list = list
  },
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  // toggle(state, todo) {
  //   todo.done = !todo.done
  // },
}

export const actions = {
  async fetchProducts({ commit }) {
    const response = await fetch('/data/products.json')
    const list = await response.json()
    commit('setList', list)
  },
}
