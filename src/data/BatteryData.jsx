// src/data/BatteryData.js

const generateBatteryData = (timeRange) => {
  const now = new Date();
  const data = { '3hr': [], '24hr': [], '7days': [], '30days': [], '1year': [] };

  if (timeRange === '3hr') {
    for (let i = 0; i < 9; i++) {
      const time = new Date(now.getTime() - i * 20 * 60000);
      data['3hr'].unshift({
        time: `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`,
        batteryLevel: Math.random() * 100,
      });
    }
  } else if (timeRange === '24hr') {
    for (let i = 0; i < 24; i++) {
      const time = new Date(now.getTime() - i * 60 * 60000);
      data['24hr'].unshift({
        time: `${i}:00`,
        batteryLevel: Math.random() * 100,
      });
    }
  } else if (timeRange === '7days') {
    for (let i = 0; i < 7; i++) {
      const time = new Date(now.getTime() - i * 24 * 60 * 60000);
      data['7days'].unshift({
        time: time.toLocaleDateString(),
        batteryLevel: Math.random() * 100,
      });
    }
  } else if (timeRange === '30days') {
    for (let i = 0; i < 30; i++) {
      const time = new Date(now.getTime() - i * 24 * 60 * 60000);
      data['30days'].unshift({
        time: time.toLocaleDateString(),
        batteryLevel: Math.random() * 100,
      });
    }
  } else if (timeRange === '1year') {
    for (let i = 0; i < 12; i++) {
      const time = new Date(now.getFullYear(), now.getMonth() - i, 1);
      data['1year'].unshift({
        time: time.toLocaleDateString('default', { month: 'short', year: 'numeric' }),
        batteryLevel: Math.random() * 100,
      });
    }
  }

  return data[timeRange];
};

export default generateBatteryData;
