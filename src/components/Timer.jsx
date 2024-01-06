import React, { useState, useEffect } from 'react';

const Timer = ({textCloudStyle}) => {
  const [day, setDay] = useState(60);
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(60);
  const [second, setSecond] = useState(60);

  useEffect(() => {
    const secInterval = setInterval(() => {
      setSecond((prevSecond) => (prevSecond > 0 ? prevSecond - 1 : 59));
    }, 1000);

    const minInterval = setInterval(() => {
      setMinute((prevMinute) => (prevMinute > 0 ? prevMinute - 1 : 59));
    }, 1000 * 60);

    const hourInterval = setInterval(() => {
      setHour((prevHour) => (prevHour > 0 ? prevHour - 1 : 24));
    }, 1000 * 60 * 60);

    const dayInterval = setInterval(() => {
      setDay((prevDay) => (prevDay > 0 ? prevDay - 1 : 60));
    }, 1000 * 60 * 60 * 24);

    return () => {
      clearInterval(secInterval);
      clearInterval(minInterval);
      clearInterval(hourInterval);
      clearInterval(dayInterval);
    };
  }, []);


  return (
    <div className='flex flex-row font-medium  text-3xl'>
      <div className=' flex flex-col items-center w-12'>
        <p>{day}</p>
        <p className='timer ' style={textCloudStyle}>DAYS</p>
      </div>
      <div className=' flex flex-col items-center w-12'>
        <p>{hour}</p>
        <p className='timer ' style={textCloudStyle}>HOURS</p>
      </div> 
      <div className=' flex flex-col items-center w-12'>
        <p>{minute}</p>
        <p className='timer ' style={textCloudStyle}>MINUTES</p>
      </div>
      <div className=' flex flex-col items-center w-12'>
        <p>{second}</p>
        <p className='timer ' style={textCloudStyle}>SECONDS</p>
      </div>
    </div>
  );
};

export default Timer;
