 const app =   new Vue({
    data: function () {
      return {
        title: 'Photo by EVA',
        drawer: true,
        rowData: [],
        sourceURL:"https://raw.githubusercontent.com/ValeriaNARDET/links/master/database.json",
        menuItems: {
          Blog: "Blog",
          Portfolio: "Portfolio",
          Info: "Info",
          Contacts: "Contacts"
       }
      }
    },
  created: function () {
  this.$http.get ( this.sourceURL )
      .then ( response => {
         this.rowData = response.body
         console.log ( response.body )
      })
      .catch ( err => {
         console.log ( "Ошибка доступа к файлу: " + this.sourceURL)
      })
  },

    router,
  }).$mount('#app')
