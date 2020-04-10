import React, { Component } from 'react';
import Button from '../Button';
import Cell from './components/Cell';
import Style from './index.css';

const ONE_DAY = 86400000;
const DAY_NAME = ['日', '一', '二', '三', '四', '五', '六'];
const TODAY = new Date();

class Calendar extends Component {

  state = {
    selectedDays: [],
  }

  componentDidMount() {
    this.setState({
      selectedDays: this.props.selectedList || [TODAY]
    });
  }

  getMonthFirstDate = (date = new Date()) => {
    const monthStart = new Date(date.setDate(1));
    return new Date(monthStart.setHours(0, 0, 0, 0));
  }

  getCalendarFirstDay = (date = new Date()) => {
    const monthFirstDate = this.getMonthFirstDate(date);
    const day = monthFirstDate.getDay();
    return new Date(monthFirstDate - day * ONE_DAY);
  }

  createDateList = () => {
    const arr = [[], [], [], [], []];
    const firstDay = this.getCalendarFirstDay();
    let i = 0;
    while (i < 7 * arr.length) {
      arr[Math.floor(i / 7)].push(firstDay.getTime() + i * ONE_DAY);
      i ++;
    }
    return arr;
  }

  renderContent = (date = TODAY) => {
    const dateList = this.createDateList();
    const currentMonth = date.getMonth();
    return dateList.map((item, index) => {
      return <div key={index}>
        { item.map((elem, i) => {
          const date = new Date(elem);
          return (
            <Cell
              key={index + '' + i}
              text={date.getDate()}
              active={currentMonth === date.getMonth()}
              selected={this.isDaySelected(date)}
            />
          );
        }) }
      </div>
    });
  }

  lastMonth = () => {
    
  }

  isDaySelected = (date) => {
    const { selectedDays } = this.state;
    const result = selectedDays.map(item => item.setHours(0, 0, 0, 0)).find((item) => {
      return +date === item;
    });
    return !!result;
  }

  render() {
    return (
      <div className={Style.container}>
        <Operation />
        <div className={Style.header}>
          { DAY_NAME.map((item, index) => {
            return <Cell key={index} text={item} active={true} />
          }) }
        </div>
        <div className={Style.content}>
          { this.renderContent() }
        </div>
      </div>
    )
  }
}

const Operation = (props) => {
  return (
    <div>
      <Button text="<" onClick={props.lastMonth} />
      <Button text=">" onClick={props.nextMonth} />
    </div>
  );
}

export default Calendar;
