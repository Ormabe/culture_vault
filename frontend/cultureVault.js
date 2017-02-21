import React from 'react';
import SignUpForm from './components/main/signupform.js';
import LogInForm from './components/main/loginform.js';
import NavBar from "./components/navigation/navbar.js"
import Footer from "./components/navigation/footer.js";
import css from './styles/navigation/navigation.scss';

const CultureVault = React.createClass({

  render() {
    const outer = {
      backgroundColor: "green"
    }
    const styling = {
      color: 'white',
      textAlign: "center",
      width: "100vw",
      fontSize: 48,
      paddingBottom: 30
    }
    const sign = {
      textAlign: 'right',
      width: "100vw",
      padding: 5,
      marginLeft: -30
    }

    return (
      <div>
        <div className="navbar-placement">
        <NavBar />
        </div>
        <div className="site-container">
          {this.props.children}
        </div>
      </div>
    );

    // return(
    //  <div>
    //    <div style={outer}>
    //      <div style={sign}>
    //        <LogInForm />
    //        <SignUpForm />
    //      </div>
    //      <div style={styling}>
    //        Culture Vault
    //      </div>
    //    </div>
    //      <NavBar />
    //    <div >
    //        {this.props.children}
    //  </div>
    //  <Footer />
    //  </div>
    // )
  }
});

export default CultureVault;
