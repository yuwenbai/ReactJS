import React, { Component } from "react";

// 然后包裹一个 function，用WrapperedComponent传入 class 的 render()中。

function HOCprogress(WrapperedComponent:any, value: number) {

//先写 class 
  return class hocForm extends Component {
    render() {
      // 添加样式 
      const innerStyle = {
        padding:'10px',
        width: "100%"
      };
      const percentStyle = {
        width: `${value}%`,
        height: "20px",
        background:
          "url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2440333743,1684406640&fm=26&gp=0.jpg)"
      };

      return (
          <div style={innerStyle}>
            <div style={percentStyle}> {value} %</div>
            <WrapperedComponent />
          </div>
      );
    }
  };
}

export default HOCprogress;