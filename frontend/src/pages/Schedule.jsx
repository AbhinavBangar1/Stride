import './Schedule.css'
import { useState } from 'react';

function Schedule(){
    const days = ['Sun' , 'Mon' , 'Tues' , 'Wed' , 'Thu' , 'Fri' , 'Sat'];
    const months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
    const today = new Date() ;
    const date = today.getDate();
    const day_idx = today.getDay() ;
    const month_idx = today.getMonth();
    const year = today.getFullYear();

    const totalCell = 42 ; //7X6
    const cells = Array.from({length : totalCell} , (_,i) => (i+1));

    const [currDate , setCurrDate] = useState(new Date());
    const [currMonth , setCurrMonth] = useState(months[month_idx]);
    
    return(
        <>
            <div className='Schedule-container'>
                <div className='month-container'>
                    <button className='jump-button'>{"<"}</button>
                    <p className='month-text'>{months[month_idx]},{year}</p>
                    <button className='jump-button'>{">"}</button>
                </div>
                <div className='days-container'>
                    {days.map((day , index) =>( 
                        <div className='days-box'>
                            <h3 key={index}>{day}</h3>
                        </div>
                    ))}
                </div>
                <div className='calender-container'>
                    {cells.map((cell , index) => (
                        <div className='date-box'>
                            <p key = {index}>{cell}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Schedule ;