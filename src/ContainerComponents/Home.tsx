import * as React from "react";
import {Header} from '../UIComponents/Header';
import A from '../A'
import B from '../B'
import C from '../C'
import {SwitchButton, HomeComponent} from '../UIComponents/SwitchButton'
import Button from '../UIComponents/Button'
export class Home extends React.Component<{},{}>{
    constructor(props : Readonly<{}>){
        super(props);
    }
    onClick1 = function(event: HTMLDivElement){

    }
    render(){
        return(
            <div >
                <Header name="test name" framework= "test framework"/>
                <A/>
                <B/>
                <C/>
                <HomeComponent open={true} />
                {/* <Button onClick ={this.onClick1} /> */}
            </div>
        )
    }
}