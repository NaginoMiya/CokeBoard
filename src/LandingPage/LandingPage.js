import reportWebVitals from '../reportWebVitals';
import Landing from './Components/Landing';
import ButtonAppBar from './Components/ApplicationBar';

export default function LandingPage(props){
  return(
    <div className="LandingPage">
      <ButtonAppBar setUid={props.setUid} />
      <Landing />
    </div>
  )
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();