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
  },

  get weekdayTable () {
    return this.currentIndex.map(day => <th>{day}</th>);
},

dailyTemperature (location) {
    const weekdayHeaders = this.currentIndex;
    return weekdayHeaders.map(day => <td>{dummyData[day].temperature}°</td>);
}

}

export const dummyData = {
    "London": {
    Sunday: {
        temperature: 18,
        precipitation: 89,
        wind: 17,
        description: "Heavy Rain"
    },
    Monday: {
        temperature: 26,
        precipitation: 60,
        wind: 11,
        description: "Chance of Showers"
    },
    Tuesday: {
        temperature: 19,
        precipitation: 80,
        wind: 19,
        description: "Showers"
    },
    Wednesday: {
        temperature: 28,
        precipitation: 20,
        wind: 9,
        description: "Cloudy"
    },
    Thursday: {
        temperature: 21,
        precipitation: 30,
        wind: 8,
        description: "Cloudy"
    },
    Friday: {
        temperature: 28,
        precipitation: 20,
        wind: 9,
        description: "Sunny Spells"
    },
    Saturday: {
        temperature: 31,
        precipitation: 0,
        wind: 2,
        description: "Sunny"
    }
},
"Paris" : {
    Sunday: {
        temperature: 20,
        precipitation: 70,
        wind: 17,
        description: "Light Rain"
    },
    Monday: {
        temperature: 28,
        precipitation: 70,
        wind: 10,
        description: "Chance of Showers"
    },
    Tuesday: {
        temperature: 20,
        precipitation: 90,
        wind: 22,
        description: "Heavy Rain"
    },
    Wednesday: {
        temperature: 28,
        precipitation: 20,
        wind: 9,
        description: "Sunny"
    },
    Thursday: {
        temperature: 29,
        precipitation: 10,
        wind: 2,
        description: "Cloudy"
    },
    Friday: {
        temperature: 28,
        precipitation: 20,
        wind: 9,
        description: "Sunny"
    },
    Saturday: {
        temperature: 11,
        precipitation: 50,
        wind: 25,
        description: "Light Rain"
    }
},
"Prague" : {
    Sunday: {
        temperature: 10,
        precipitation: 70,
        wind: 18,
        description: "Heavy Rain"
    },
    Monday: {
        temperature: 12,
        precipitation: 70,
        wind: 10,
        description: "Chance of Showers"
    },
    Tuesday: {
        temperature: 18,
        precipitation: 80,
        wind: 29,
        description: "Heavy Rain"
    },
    Wednesday: {
        temperature: 17,
        precipitation: 2,
        wind: 12,
        description: "Sunny"
    },
    Thursday: {
        temperature: 29,
        precipitation: 10,
        wind: 2,
        description: "Sunny Spells"
    },
    Friday: {
        temperature: 18,
        precipitation: 5,
        wind: 9,
        description: "Sunny"
    },
    Saturday: {
        temperature: 8,
        precipitation: 30,
        wind: 15,
        description: "Light Rain"
    }
},
"New York" : {
    Sunday: {
        temperature: 18,
        precipitation: 89,
        wind: 17,
        description: "Heavy Rain"
    },
    Monday: {
        temperature: 12,
        precipitation: 70,
        wind: 10,
        description: "Chance of Showers"
    },
    Tuesday: {
        temperature: 18,
        precipitation: 80,
        wind: 29,
        description: "Heavy Rain"
    },
    Wednesday: {
        temperature: 25,
        precipitation: 10,
        wind: 7,
        description: "Sunny Spells"
    },
    Thursday: {
        temperature: 18,
        precipitation: 10,
        wind: 2,
        description: "Cloudy"
    },
    Friday: {
        temperature: 28,
        precipitation: 20,
        wind: 9,
        description: "Sunny"
    },
    Saturday: {
        temperature: 24,
        precipitation: 10,
        wind: 9,
        description: "Sunny Spells"
    },
}
}