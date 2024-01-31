
import { TextField } from "@mui/material";
function ProfileForm() {
    return ( <>
   
    <div className="parent">
        <div className="photo"></div>
         <div className="sign">
            <center><div className="login"><h1 className="lo">Welcome</h1></div></center>
            <div className="fo">
                    <center>
                        <div className="text">
                <TextField id="standard-basic" label="Username" variant="outlined" />
                <br></br>
                </div>
                <TextField id="standard-basic" label="Email" variant="outlined" />
                <br></br>
                <div className="pass">
                {/* <TextField id="standard-basic" label="Phone number" variant="outlined" /> */}
                {/* <TextField id="standard-basic" label="Password" variant="outlined" />  */}
                 <TextField id="standard-basic" label="Address" variant="outlined" />
                </div>
            
<TextField id="standard-basic" label="Password" variant="outlined" /> 
<div className="but1">
      <button className="but2">Register</button>
</div>

            </center>
            </div>
            
         </div>
    </div>
    </> );
}

export default ProfileForm;