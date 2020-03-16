import React, { Component } from 'react';
import Cell from './components/Cell';

const ONE_DAY = 86400000;
const DAY_NAME = ['日', '一', '二', '三', '四', '五', '六'];
const TODAY = new Date();

class Calendar extends Component {

  getMonthFirstDate = (date = TODAY) => {
    const monthStart = new Date(date.setDate(1));
    return new Date(monthStart.setHours(0, 0, 0, 0));
  }

  getCalendarFirstDay = (date = TODAY) => {
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

  renderContent = () => {
    const dateList = this.createDateList();
    const currentMonth = new Date().getMonth();
    return dateList.map(function(item, index) {
      return <div key={index}>
        { item.map(function(elem, i) {
          const date = new Date(elem);
          return <Cell key={index + '' + i} text={date.getDate()} active={currentMonth === date.getMonth()} />
        }) }
      </div>
    });
  }

  render() {
    return <div>
      <div className={'header'}>
        { DAY_NAME.map((item, index) => {
          return <Cell key={index} text={item} active={true} />
        }) }
      </div>
      <div className={'content'}>
        { this.renderContent() }
      </div>
    </div>
  }
}

export default Calendar;
