import React from 'react';

export const todayDate = {
    weekdayIndex: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],
  
  get currentDay () {
    let today = new Date();
    let todayIndex = today.getDay();
    return this.weekdayIndex[todayIndex];
  },
  
  get currentIndex () {
    let today = new Date();
    let todayIndex = today.getDay();
    let newIndex = this.weekdayIndex;
    return (newIndex.slice(todayIndex,todayIndex+7))
  },

  get weekdayList () {
      return this.currentIndex.map(day => <li>{day}</li>);
  }
}