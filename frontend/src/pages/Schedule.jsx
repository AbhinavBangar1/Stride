import './Schedule.css'
import { useState , useRef , useEffect} from 'react';
import rough from 'roughjs/bundled/rough.esm';

function RoughX() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const rc = rough.canvas(canvas);

        // clear before drawing (important on re-render)
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw X
        rc.line(5, 5, 45, 45, {
            stroke: "red",
            strokeWidth: 3,
            roughness: 2
        });

        rc.line(45, 5, 5, 45, {
            stroke: "red",
            strokeWidth: 3,
            roughness: 2
        });

    }, []);

    return <canvas ref={canvasRef} width={50} height={50} />;
}

function Schedule(){
    const days = ['Sun' , 'Mon' , 'Tues' , 'Wed' , 'Thu' , 'Fri' , 'Sat'];
    const months = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];
    const today = new Date() ;
    const date = today.getDate();
    const day_idx = today.getDay() ;
    const month_idx = today.getMonth();
    const year = today.getFullYear();

    const totalCell = 42 ; //7X6
    const cells = [];

    const getDaysInMonth = (year , month_idx) => {
        return new Date(year , month_idx+1 , 0).getDate();
    }
    const getFirstDayOfMonth = (year , month_idx) => {
        return new Date(year , month_idx , 1).getDay();
    }

    const daysInMonth = getDaysInMonth(year , month_idx);
    const firstDayOfMonth = getFirstDayOfMonth(year ,month_idx) ;

    for(let i = 0 ; i < firstDayOfMonth ;i++){
        cells.push(null);
    }
    for(let i = 1 ; i <= daysInMonth ; i++){
        cells.push(i);
    }
    for(let i = cells.length ; i < totalCell ; i++ ){
        cells.push(null);
    }

    const [currDate , setCurrDate] = useState(new Date());
    const [currMonth , setCurrMonth] = useState(months[month_idx]);

    const renderX = (cell) => {
        if (!cell) return null;

        const isPast =
            year === today.getFullYear() &&
            month_idx === today.getMonth() &&
            cell < today.getDate();

        if (!isPast) return null;

        return <RoughX />;
    };
    
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
                        <div className='date-box' key={index}>
                            {cell && <p className="date-number">{cell}</p>}
                            {renderX(cell)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Schedule ;