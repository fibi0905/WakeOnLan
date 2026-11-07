import React from 'react';
import { IonAlert, IonButton, IonContent, IonFabButton, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Log.css';
import { RouteComponentProps, withRouter } from 'react-router-dom';


import { logIn} from '../../Typescript/pcService';
import lock from '../../theme/Icon/lock-closed-outline.svg'
import close from '../../theme/Icon/close-outline.svg'
import arrow from '../../theme/Icon/arrow-forward-outline.svg'
import isMobile from 'is-mobile';

type OwnProps = {
  rederict: ()=> void,
};
type Props = OwnProps & RouteComponentProps;

type State = {
  loading:boolean,
  correct:boolean,
}

class Log extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      loading:false,
      correct:true,

    }
  }

  pass = React.createRef<HTMLIonInputElement>()

  changeState = (ok:boolean)=>{
    if(ok){
      this.setState({
        loading:false,
      })
    }
    else{
      this.setState({
        loading:false,
        correct:false,
      })

      setTimeout(()=>{
        this.setState({
          correct:true,
        })
      }, 2000);
    }
  }

  log = async()=>{
    if(this.pass.current ){
      let passIn = this.pass.current.value as string

      this.pass.current.value = ""
      
      if(await logIn(passIn)){
        this.changeState(true)
        this.props.rederict()
        this.props.history.push('/home')
      }
      else{
        this.changeState(false)
      }
      
    }
    else{
      this.changeState(false)
    }
  }

  

  render() {
    const {loading} = this.state;
    return (
      <IonPage >
        <IonHeader className='header'>
          <div className="headerCont">
            <IonText className='logIN'>Login</IonText>
          </div>

        </IonHeader>
        <IonContent scrollX={false} scrollY={false}>
          <div className="mainCont">

            <div className={`formLoginGrid${isMobile() ? ' formGridMobile' : ''}`}>
              <div className="iconFromC">

                {!loading &&

                  <IonIcon
                    className={`iconFrom${!this.state.correct ? ' incorect' : ''}`}
                    icon={
                      this.state.correct ?
                        lock
                      :
                        close
                      
                    }
                  ></IonIcon>
                }

                {loading &&
                  <IonSpinner 
                    name="lines-sharp"
                    className='spiner'
                  ></IonSpinner>
                
                }
              </div>

              <div className="inputTextC">
                <IonInput
                  className='inputText'
                  required={true}
                  clearOnEdit={true}  
                  fill="outline"
                  mode='ios'
                  type='password'
                  placeholder='Password' 
                  onKeyUp={(e: any) => {
                    if (e.key === 'Enter' && !isMobile()) {
                      this.log();
                    }
                  }}
                  ref={this.pass}

                ></IonInput>

              </div>

              <div className="sendC">
                <IonFabButton 
                  className='send'
                  onClick={()=>{
                   this.log()
                  }}
                >
                  <IonIcon
                    icon={arrow}
                  ></IonIcon>
                </IonFabButton>

              </div>



            </div>

          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(Log);