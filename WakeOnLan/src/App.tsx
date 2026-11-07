import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Log from './pages/Log/Log'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();
type State = {
  loggedIn: boolean;
};

class App extends React.Component<{}, State> {

  constructor(props: any) {
    super(props);
    this.state = { loggedIn: false };
  }

  log = ()=>{
    this.setState({loggedIn: true});
  }

  render() {
    return(
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>

          {/* primo approccio, va sulla schermata di log */}
            <Route exact path="/log">
                <Log rederict={this.log}/>
            </Route>

          {/* se prova ad andare ad home, ma non è loggato allora lo riporta su /log */}
            <Route exact path="/home">
              {this.state.loggedIn ? 
                <Home />  
                :
                <Redirect to="/log" />
              }
            </Route>

          {/* di base va su log */}
            <Route exact path="/">
              <Redirect to="/log" />
            </Route>



          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );

  }
}

export default App;