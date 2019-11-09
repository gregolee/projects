import React from 'react';

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    /********* Constructor ********/
    constructor(props) {
        super(props);
        
        this.state = {
            date: new Date(),
            lastName: 'Lee'
        };
    }

    /********* Lifecycle ********/
    //Lifecycle method : componentDidMount()
    componentDidMount() {
        this.timerID = setInterval( 
            () => {
                this.tick();
            }
            , 1000 
        );
    }
    
    //Lifecycle method : componentWillMount()
    componentWillMount() {
        clearInterval(this.timerID);
        this.formatName();
    }

    /********* Methods ********/
    tick() {
        // Wrong : 이 코드는 컴포넌트를 다시 렌더링하지 않는다.
        //this.state.date = new Date();

        // Correct
        this.setState({
            date: new Date()
        });
    }
    
    formatName() {
        //Wrong : this.props와 this.state가 비동기적으로 업데이트될 수 있기 때문에 다음 state를 계산할 때 해당 값에 의존해서는 안된다.
        //this.setState({
        //    fullName: `${this.props.name} ${this.state.lastName}`
        //});
        
        //Correct
        this.setState((state, props) => ({
            fullName: `${props.name} ${state.lastName}`
        }));
    }

    /********* render **********/
    render() {
        return (
            <div>
                <h1>Hello, {this.state.fullName}!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export default Clock;