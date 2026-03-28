import './Schedule.css'

function Schedule(){
    const days = ['Sun' , 'Mon' , 'Tues' , 'Wed' , 'Thu' , 'Fri' , 'Sat'];

    return(
        <>
            <div className='Schedule-container'>
                <div className='month-container'></div>
                <div className='days-container'>
                    {days.map((day , index) =>( 
                        <div className='days-box'>
                            <h3 key={index}>{day}</h3>
                        </div>
                    ))}
                    
                </div>
                <div className='calender-container'></div>
            </div>
        </>
    );
}

export default Schedule ;