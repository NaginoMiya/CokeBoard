import firebase from 'firebase';

function LogoutButton(props){
    
    const logout = () => {
        firebase.auth().signOut();
        props.setUid(null);
    }

    return (
        <div>
            <button onClick={logout}> Logout!!! </button>
        </div>
    );
}
export default LogoutButton;