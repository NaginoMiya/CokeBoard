import reportWebVitals from '../reportWebVitals';
import Landing from './Components/Landing';
import ButtonAppBar from './Components/ApplicationBar';
import Footer from './Components/Footer';
import './LandingPage.css';

export default function LandingPage(props){
  return(
    <div className="LandingPage">
      <ButtonAppBar setUid={props.setUid} />
      <Landing />
      <Footer />
    </div>
  )
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();