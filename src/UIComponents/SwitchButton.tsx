import React from 'react'
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'http2';
export interface SwitchButtonProps {open: boolean}
export interface SwitchButtonState {open: boolean}
type HomeProps = SwitchButtonProps & RouteComponentProps;

export class SwitchButton extends React.Component<HomeProps,SwitchButtonState> {
  constructor(props: Readonly<HomeProps>){
    super(props)
    this.state = {
      open: this.props.open,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event: any) {
    console.log(' event is ' + this.state.open)
    // this.props.history.push("/logout");
    this.props.history.push('/login')
    this.setState({ open: !this.state.open })
  }

  render() {
    let open = this.state.open,
      className = open ? 'switch-button open' : 'btn-switch'

    return (
      <label className={className} onClick={this.handleClick}>
        <input type="checkbox" checked={open}/>
      </label>
    )
  }
}
export const HomeComponent = withRouter(SwitchButton);
