import * as React from "react";
export interface HeaderProps { name: string, framework: string;}
export interface HeaderState { nameone: string, nametwo: string;}

export class Header extends React.Component<HeaderProps,HeaderState>{
    constructor(props: Readonly<HeaderProps>){
        super(props);
        this.state = {
            nameone:props.name,
            nametwo:this.props.name
        }
    }
    componentDidMount() {
        this.setState({nameone:"aaa"});
      }
    render(){
        return(
            <div >
                <h1> {this.state.nameone} </h1>
                <h1> {this.state.nametwo} </h1>
            </div>
        )
    }
}