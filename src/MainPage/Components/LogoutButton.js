import firebase from 'firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

function LogoutButton(props){
    
    const logout = () => {
        firebase.auth().signOut();
        props.setUid(null);
    }

    return (
        <Button variant="contained" onClick={logout} endIcon={<ExitToAppIcon/>}>Logout</Button>
    );
}
export default LogoutButton;