class FishBread {
    constructor(shape='Heart', color='#FFBD00', temperature=100, flavor='Sweet Red Bean') {
        this._shapes = ['Circle', 'Triangle', 'Heart', 'Cloud'];
        this._flavor = ['Sweet Red Bean', 'Pizza', 'Vegitable', 'Cheeze'];
        this._shapeIcon = {
            Circle: 'lens',
            Triangle: 'change_history',
            Heart: 'favorite',
            Cloud: 'wb_cloudy'
        };
        this._crunchy = {
            r: 'RARE',
            mr: 'MEDIUM RARE',
            m: 'Medium',
            mw: 'MEDIUM WELL',
            w: 'WELL DONE'
        };
        this.message = {
            welcome: '안녕하세요. Javascript FishBread Shop 입니다.',
            beforeBake: (s, c, f) => `${s} 모양, ${c} 굽기인 ${f}맛일 것 같아요!`,
            takeOrder: `주문해주세요.`,
            isOkay: '이대로 빵을 만들까요?',
            bakeComplete: result => `${result}빵이 완성되었습니다. 맛있게 드세요!`,
            pleaseBake: '구워주세요!!'
        };

        this.shape = shape;
        this.color = color;
        this.temperature = temperature;
        this.flavor = flavor;
        this.result = '';
    }
    getCrunchy() {
        const crunchyValue = this.temperature<100 && 'r'
                ||  this.temperature<120 && 'mr'
                ||  this.temperature<140 && 'm'
                ||  this.temperature<160 && 'mw'
                ||  'w';
        return this._crunchy[crunchyValue];
    }
    getFlavor() {
        return this.flavor;
    }
    bake() {
        const isBake = confirm(this.message.isOkay)
        const result = !isBake ? '' : `<font color="${this.color}"><i class="material-icons">${this._shapeIcon[this.shape]}</i> ${this.flavor}, ${this.getCrunchy()} </font>`;
        const h1 = document.querySelector('.bread');
        console.log(h1);
        h1.innerHTML = result;
    }
}