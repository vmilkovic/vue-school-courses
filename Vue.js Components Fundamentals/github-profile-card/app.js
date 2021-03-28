const GithubUserCard = {
    template: '#github-user-card',
    props: {
        username: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            user: {}
        }
    },
    created () {
        axios.get('https://api.github.com/users/' + this.username).then(response => {
            this.user = response.data
        })
    }
}

new Vue({
  el: '#app',
  components: {
      GithubUserCard
  },
  data () {
      return {
          usernames: ['vmilkovic']
      }
  }
})