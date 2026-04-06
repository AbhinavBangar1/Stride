import './Header.css';
import {useNavigate} from "react-router"
function Header(){ 
    let navigate = useNavigate() ;
    return(    
        <>
            <div className='header-container'>
                <button className='site-name' onClick={() => navigate("/")}>Stride</button>
                <button className></button>
            </div>
        </>
    );
}

export default Header;