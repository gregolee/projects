class Hotel {
    constructor() {
        const _self = this;
        this.customers = [];
        this.messages = {
            required: v => '고객님의 성함이 입력되지 않았습니다.',
            chkString: v => `${v} 값은 문자열이 아닙니다.`,
            dupCheckIn: v => `이미 ${v}님은 체크인 하셨습니다.`,
            alreadyCheckOut: v => `${v}님은 체크인 명단에 없습니다.`
        };
        this.rules = {
            required: v => (v !== null && v !== '') ? true : _self.messages.required(v),
            chkString: v => typeof v === 'string' ? true : _self.messages.chkString(v),
            chkCheckIn: (v, customers) => {
                const cnt = customers
                    .filter(customer => customer === v ? true : false)
                    .length
                return cnt ? _self.messages.dupCheckIn(v) : true
            },
            chkCheckOut: (v, customers) => {
                const cnt = customers
                    .filter(customer => customer === v ? true : false)
                    .length
                return cnt ? true : _self.messages.alreadyCheckOut(v)
            }
        };
    }
    getStatus() {
        const customers = this.customers.map(v => `${v}님`).join(", ")
        return customers === '' ? '체크인한 고객이 없습니다.' : `${customers}이 체크인했습니다.`;
    }
    checkIn(name) {
        this.customers.push(name);
        return `안녕하세요. ${name}님 반갑습니다.`;
    }
    checkOut(name) {
        const idx = this.customers.indexOf(name)
        this.customers.splice(idx, 1)
        return `${name}님 감사합니다. 안녕히 가세요.`;
    }
}