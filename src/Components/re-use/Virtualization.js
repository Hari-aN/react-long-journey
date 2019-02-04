import * as React from 'react';
import { List } from "react-virtualized";
import loremIpsum from 'lorem-ipsum';
const rowCount = 1000;
export default class Virtualization extends React.Component {
  constructor() {
    super();
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx,
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: loremIpsum({
          count: 1,
          units: 'sentences',
          sentenceLowerBound: 4,
          sentenceUpperBound: 8
        })
      }
    });
  }
  // renderRow = (item) => {
  //   return (
  //     <div key={item.id} className="row">
  //       <div className="image">
  //         <img src={item.image} alt="" />
  //       </div>
  //       <div className="content">
  //         <div>{item.name}</div>
  //         <div>{item.text}</div>
  //       </div>
  //     </div>
  //   );
  // }
  renderRow = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{this.list[index].name}</div>
          <div>{this.list[index].text}</div>
        </div>
      </div>
    );
  }
  render() {
    const listHeight = 600;
    const rowHeight = 50;
    const rowWidth = 800;
    return (
      <div className="App">
        <div className="newList">
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={this.renderRow}
            rowCount={this.list.length} /></div>

      </div>
    );
  }
}
