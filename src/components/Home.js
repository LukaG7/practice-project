import { TextField } from "@mui/material";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home-div">
            <TextField className="searchbar" id="standard-basic" label="Search" variant="standard" />
            <h1 className="title">Welcome to MineChat!</h1>
            <Link to='/signin' className="signup"><h3>Sign In</h3></Link> {/**this will appear as 'profile' when logged in */}
            <Link to='/' className="homelink"><h3>Home</h3></Link>
        </div>
    )
}

export default Home;