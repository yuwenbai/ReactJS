import * as React from "react";
import Counter from './UIComponents/Counter'
export interface HelloProps { 
    compiler: string, 
    framework: string,
    onIncrement?: () => void,
    onDecrement?: () => void,
}
interface IState {
    count: number,
    aaa:string
  }
export class Hello extends React.Component<HelloProps,IState>{

    componentDidMount() {
        this.test();
      }
    test(){
        let decLiteral: number = 6;
        console.log('decLiteral ' + decLiteral);
        this.setState({aaa:'320',count:100})
        const that = this;
        setTimeout(function(){
            console.log('foo is ' +that.state.count)
            var foo = that.state.count as number;
            console.log('foo is ' +foo)
            console.log('decLiteral ' + that.state.aaa);
        }.bind(this),1000)
        
    }
    render() {
        return (
            
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <div>
                    <h1> button group</h1>
                    <button onClick={this.props.onDecrement}>-</button>
                    <button onClick={this.props.onIncrement}>+</button>
                </div>
                <div>
                    <Counter/>
                </div>
                
                {/* <Game/> */}
                {/* <Home/> */}
            </div>
        )
    }
}