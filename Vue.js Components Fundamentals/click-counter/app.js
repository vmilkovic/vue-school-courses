Vue.component('click-counter', {
    //template: '<button @click="count++">{{count}}</button>',
    template: '#click-counter-template', 
    data () {
        return {
            count: 0
        }
    }
})


new Vue({
    el: '#app'
})