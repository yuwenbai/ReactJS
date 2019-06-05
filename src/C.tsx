import React, { Component } from "react";
import HOCprogress from "./HOCprogress";


class C extends Component {
  render() {
    return <div>这是 C 组件！</div>;
  }
}

// 我们可以使用 @HOCprogress 装饰器这样的方式来替代函数包裹这种方式具体的见我的装饰器的那篇文章。
export default HOCprogress(C, 20);

// C.tsx 同上
