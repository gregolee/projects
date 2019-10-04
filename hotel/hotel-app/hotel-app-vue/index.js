let app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        message: {
            welcome: '안녕하세요. 부다페스트 호텔에 오신 것을 환영합니다.'
        },
        showMsg: '',
        multiLine: true,
        snackbar: false,
        hotel: {
            rules: {}
        },
        checkInName: '',
        checkOutName: ''
    },
    methods: {
        getStatus: function() {
            this.snackbar = false
            this.showMsg = this.hotel.getStatus()
            this.snackbar = true
        },
        checkIn: function(event) {
            this.snackbar = false
            if (this.$refs.checkInInput.validate()) {
                this.showMsg = this.hotel.checkIn(event.target.value)
                this.checkInName = ''
            } else {
                this.showMsg = '체크인 도중 오류가 발생했습니다. 입력 값을 확인하세요.'
            }
            this.snackbar = true
        },
        checkOut: function(event) {
            this.snackbar = false
            if (this.$refs.checkOutInput.validate()) {
                this.showMsg = this.hotel.checkOut(event.target.value)
                this.checkOutName = ''
            } else {
                this.showMsg = '체크아웃 도중 오류가 발생했습니다. 입력 값을 확인하세요.'
            }

            this.snackbar = true
        }
    },
    created: function() {
        this.hotel = new Hotel()
    }
});