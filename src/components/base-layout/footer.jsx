import React, {Component} from 'react'
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from "react-loader-spinner";

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
  
    return (
      promiseInProgress && (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
      )
    );
  };

class FooterComponent extends Component{
    render(){
        return(
            <div>
            <LoadingIndicator/>
            <footer className="section" style={{backgroundColor:'#53C279'}}>
                <span className="text-white">App em React com Backend em SpringBoot...</span>
            </footer>
            </div>
        )
    }
}

export default FooterComponent