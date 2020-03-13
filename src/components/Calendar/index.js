import React, { Component } from 'react';

const oneDay = 86400000;

class Calendar extends Component {

  getMonthOfDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const monthFirstDay = new Date(today.setDate(1));
    return { year, month, date, monthFirstDay };
  }

  getNextMonthFirstDate = date => {
    const month = date.getMonth();
    const nextMonthStart = new Date(date.setMonth(month + 1, 1));
    return new Date(nextMonthStart.setHours(0, 0, 0, 0));
  }

  getMonthFirstDate = date => {
    const monthStart = new Date(date.setDate(1));
    return new Date(monthStart.setHours(0, 0, 0, 0));
  }

  getCalendarFirstDay = date => {
    const monthFirstDate = this.getMonthFirstDate(date);
    const day = monthFirstDate.getDay();
    return new Date(monthFirstDate - day * oneDay);
  }

  getCalendarEndDay = date => {
    const monthEndDate = new Date(this.getNextMonthFirstDate(date) - 1);
    const day = monthEndDate.getDay();
    return new Date(+monthEndDate + (7 - day) * oneDay);
  }

  render() {
    const { onChange } = this.props;
    console.log(this.getCalendarEndDay(new Date()));
    return <div>
    </div>
  }
}

export default Calendar;
