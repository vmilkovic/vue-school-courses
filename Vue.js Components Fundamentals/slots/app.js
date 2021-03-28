Vue.component('todo-item', {
  template: '#todo-item-template',
  data () {
    return {
      completed: false
    }
  }
})

Vue.component('page-layout', {
  template: '#page-layout-template'
})

new Vue({
  el: '#app'
})