let app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        fishBread: {},
        showMsg: ''
    },
    created: function() {
        this.fishBread = new FishBread()
    }
});