import React from 'react';
import {sevenDayDummyData, oneDayDummyData} from './DummyData'
import CloudyIcon from '../Images/CloudyIcon.png';
import SunnyIcon from '../Images/SunnyIcon.png';
import ChanceOfShowersIcon from '../Images/ChanceOfShowerIcon.png';
import HeavyRainIcon from '../Images/HeavyRainIcon.png';
import LightRainIcon from '../Images/LightRainIcon.png';
import SunnySpellsIcon from '../Images/SunnySpellsIcon.png';
import ShowersIcon from '../Images/ShowersIcon.png';



export const sevenDayCalculations = {
    weekdayIndex: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],

    dataTypeIndex : ["temperature","precipitation","wind","description"],
  
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

export const weatherIcons = {
  icons : {
  "Cloudy": CloudyIcon,
  "Chance of Showers": ChanceOfShowersIcon,
  "Sunny Spells": SunnySpellsIcon,
  "Sunny": SunnyIcon,
  "Light Rain": LightRainIcon,
  "Heavy Rain": HeavyRainIcon,
  "Showers": ShowersIcon
  },
  
generateOneDayIcons(location) {
  let hoursInDay = Object.keys(oneDayDummyData.London).sort((a,b)=>a-b).map(hour => hour);
  let collectedArray = [];
  for(let i=0; i<hoursInDay.length;i++){
    let currentHour = hoursInDay[i];
    collectedArray.push(oneDayDummyData[location][currentHour][3]) 
  }

  let iconArray = [];
  for(let i=0; i<collectedArray.length; i++){
    let generatedIcon = this.icons[collectedArray[i]];
    iconArray.push(generatedIcon);
  } 
  
  return iconArray.map(data => <td><img src={data} alt="weather icon" width="80" ></img></td>)
},

generateSevenDayIcons(location) {
  let daysInWeek = sevenDayCalculations.currentIndex;
  console.log(daysInWeek);
  let collectedArray = [];
  for(let i=0; i<daysInWeek.length; i++){
    let currentDay = daysInWeek[i];
    collectedArray.push(sevenDayDummyData[location][currentDay]["description"]);
  }
  console.log(collectedArray);
  let iconArray = [];
  for(let i=0; i<collectedArray.length; i++){
    let generatedIcon = this.icons[collectedArray[i]];
    iconArray.push(generatedIcon);
  } 
  console.log(iconArray);
  return iconArray.map(data => <td><img src={data} alt="weather icon" width="80" ></img></td>)
}

}


