import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { decrement, increment } from '../store/actions';
import { StoreState } from '../types';

// 创建类型接口
export interface IProps {
    value: number,
    readonly onIncrement: () => void,
    readonly onDecrement: () => void
}

class Counter extends React.PureComponent<IProps,{}> {
    constructor(props: Readonly<IProps>){
        super(props);
    }
    public componentWillMount () {
      // tslint:disable-next-line
      console.log(this.props) // 这里的prop是拿不到dispatch函数，因为组合高阶函数的时候做了处理，没有传入dispatch，只有{value: 0, onDecrement: ƒ, onIncrement: ƒ}
    }
    
    public render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <p>
                Clicked: { value } times
                <br />
                <br />
                <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
                <button onClick={ onDecrement }> - </button>
            </p>
        )
    }
  }
  // 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
const mapStateToProps = (count:number): { value: number } => ({
    value: count
  })
  
  // 将 对应action 插入到组件的 props 中
  const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
  })
  
  // 使用 connect 高阶组件对 Counter 进行包裹
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// export default Counter;