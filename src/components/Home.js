import { TextField } from "@mui/material";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-div">
            <TextField className="searchbar" id="standard-basic" label="Search" variant="standard" />
            <h1 className="title">Welcome to MineChat!</h1>
            <Link to='/signup' className="signup"><h3>SignUp</h3></Link> {/**this will appear as 'profile' when logged in */}
        </div>
    )
}

export default Home;