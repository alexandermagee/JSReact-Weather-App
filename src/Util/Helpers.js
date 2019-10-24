import React from 'react';
import {sevenDayDummyData, oneDayDummyData} from './DummyData'

export const sevenDayCalculations = {
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
  },

  get weekdayTable () {
    return this.currentIndex.map(day => <th>{day}</th>);
},

dailyData (location,dataType) {
    const weekdayHeaders = this.currentIndex;
    return weekdayHeaders.map(day => <td>{sevenDayDummyData[location][day][dataType]}</td>);
}

}

export const oneDayCalculations = {
    
  dataTypeIndex : ["temperature","precipitation","wind","description"],
  
  get hoursList () {
      return (Object.keys(oneDayDummyData.London)).sort((a,b)=>a-b).map(hour => <th>{hour}</th>)
    },

  hourlyData (location,dataType,hour) {
    let requestedDataIndex = this.dataTypeIndex.indexOf(dataType);
    return oneDayDummyData[location][hour][requestedDataIndex];
  },

  hourlyDataArray (location,dataType,hour) {
    let requestedDataIndex = this.dataTypeIndex.indexOf(dataType);
    let hoursInDay = Object.keys(oneDayDummyData.London).sort((a,b)=>a-b).map(hour => hour); 
    let collectedArray= []
    for(let i=0; i<hoursInDay.length;i++){
      let currentHour = hoursInDay[i];
      collectedArray.push(oneDayDummyData[location][currentHour][requestedDataIndex]) 
    }
    return collectedArray.map(data => <td>{data}</td>)
  }
}



