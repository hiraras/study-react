import React, { Component } from 'react';
import Cell from './components/Cell';

const ONE_DAY = 86400000;
const DAY_NAME = ['日', '一', '二', '三', '四', '五', '六'];
const TODAY = new Date();

class Calendar extends Component {
  getMonthOfDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const monthFirstDay = new Date(today.setDate(1));
    return { year, month, date, monthFirstDay };
  }

  getNextMonthFirstDate = (date = TODAY) => {
    const month = date.getMonth();
    const nextMonthStart = new Date(date.setMonth(month + 1, 1));
    return new Date(nextMonthStart.setHours(0, 0, 0, 0));
  }

  getMonthFirstDate = (date = TODAY) => {
    const monthStart = new Date(date.setDate(1));
    return new Date(monthStart.setHours(0, 0, 0, 0));
  }

  getCalendarFirstDay = (date = TODAY) => {
    const monthFirstDate = this.getMonthFirstDate(date);
    const day = monthFirstDate.getDay();
    return new Date(monthFirstDate - day * ONE_DAY);
  }

  getCalendarEndDay = (date = TODAY) => {
    const monthEndDate = new Date(this.getNextMonthFirstDate(date));
    const day = monthEndDate.getDay();
    return new Date(+monthEndDate + (7 - day) * ONE_DAY - 1);
  }

  renderContent = () => {
    const arr = [[], [], [], [], []];
    const firstDay = this.getCalendarFirstDay();
    const { month: currentMonth } = this.getMonthOfDate();
    let i = 0;
    while (i < 35) {
      arr[Math.floor(i / 7)].push(firstDay.getTime() + i * ONE_DAY);
      i ++;
    }
    return arr.map(function(item, index) {
      return <div key={index}>
        { item.map(function(elem, i) {
          const date = new Date(elem);
          return <Cell key={index + '' + i} text={date.getDate()} active={currentMonth === date.getMonth()} />
        }) }
      </div>
    });
  }

  render() {
    console.log(this.getCalendarEndDay());
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
