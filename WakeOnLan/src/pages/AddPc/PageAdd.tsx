import React from 'react';
import {
  IonAlert,
  IonButton, IonCard, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonText, IonTextarea, IonTitle, IonToolbar
} from '@ionic/react';
import './PageAdd.css';

import { addPc, Pc } from '../../Typescript/pcService';

import desk from '../../theme/Icon/desktop-outline.svg'
import close from '../../theme/Icon/close-outline.svg'
import MAC from '../../theme/Icon/security.svg'
import isMobile from 'is-mobile';


type OwnProps = {
  onClose: () => void,
  reload: ()=> void;
};
type Props = OwnProps;
type State = {
  notMac:boolean,
  notName:boolean,
  confirm: boolean,
  pcAdd: Pc;

};

class PageAdd extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      notName:false,
      notMac:false,
      confirm:false,
      pcAdd: {nome: '', mac: ''},

    };
  }

  macRef = React.createRef<HTMLIonInputElement>()
  nameRef = React.createRef<HTMLIonInputElement>()

  menu = () => {
    if(this.macRef.current && this.nameRef.current){
      let macS = this.macRef.current.value as string;
      let nameS = this.nameRef.current.value as string;

      if(macS == ''){
        this.setState({notMac: true});
      }

      if(nameS == ''){
        this.setState({notName: true});
      }

      if(nameS != '' && macS != ''){
        console.log("inside");
        this.setState({
          pcAdd:{ nome: nameS, mac: macS  }, // Oggetto completo
          confirm: true,
        });
      }

    }
    else{
      console.log("Problema con il current");
    }
  }

  Cairca = async () =>{
    await addPc(this.state.pcAdd.nome, this.state.pcAdd.mac);
    this.setState({
      notMac:false,
      notName: false,
      confirm: false
    });
    this.props.reload();
    this.props.onClose();
    if(this.macRef.current && this.nameRef.current){
      this.macRef.current.value = '';
      this.nameRef.current.value = '';
    }

  }


  render() {
    return (
      <IonPage>
        <IonHeader>
          <div className="ToolBar">
            <div id="clos"
              onClick={()=>{
                this.props.onClose();
                console.log("click");
              }}
            >
              <IonIcon className='Icon' icon={close}></IonIcon>
            </div>

            <IonTitle id='tTool'>Aggiungi Pc</IonTitle>

            <div id="des">

              <IonIcon className='Icon' icon={desk}></IonIcon>
            </div>
          </div>
        </IonHeader>


        <IonContent>

          {/*----------------Alert Error----------------*/}

            <IonAlert 
              isOpen ={this.state.notMac && this.state.notName}
              header='Non sono stati inseriti Dati'
              
              buttons={[
                {
                  text: 'Chiudi',
                  handler:()=>{
                    this.setState({notMac:false, notName: false});
                    this.props.onClose();
                  }
                },
                {
                  text: 'Back',
                  handler:()=>{
                    this.setState({notMac:false, notName: false});
                  },
                }

              ]}
            >

            </IonAlert>
              
            <IonAlert
              isOpen ={this.state.notMac && !this.state.notName}
              header='Manca il Mac'
              
              buttons={[
                {
                  text: 'Back',
                  handler:()=>{
                    this.setState({notMac:false});
                    
                  }
                },

              ]}
            >

            </IonAlert>

            <IonAlert
              isOpen ={!this.state.notMac && this.state.notName}
              header='Manca il Nome'
              
              buttons={[
                {
                  text: 'Back',
                  handler:()=>{
                    this.setState({notMac:false});
                    
                  }
                },

              ]}
            >

            </IonAlert>

          {/*-------------------------------------------*/}

          {/*---------------Alert Confrim---------------*/}

            <IonAlert
              isOpen ={this.state.confirm}
              header= 'Dati'
              message={`Nome: ${this.state.pcAdd?.nome} -  Mac: ${this.state.pcAdd?.mac}`}
              buttons={[
                {
                  text: 'Annulla',
                  handler: ()=>{
                    this.setState({confirm:false});
                  }
                },
                {
                  text: 'Conferma',
                  handler: () =>{
                    this.Cairca();
                  }

                }
              ]}  
            >

            </IonAlert>

          {/*-------------------------------------------*/}



          



          <div className="Content">

            <div className='Card' style={{background: '#FEF9C3'}}>
              <div className="CardFrom" style={isMobile() ? {width: '45%'} : {width: '25%'}}>
                <IonIcon className='CardIcon' icon={desk}></IonIcon>
                <IonLabel>Nome</IonLabel>
              </div>
              <>
                <IonInput
                  placeholder='Pc di ...' 
                  popoverTarget='Nome del pc' 
                  required={true}
                  clearOnEdit={true}  
                  fill="outline"
                  mode='ios'
                  className='IonInput'
                  ref={this.nameRef}
                ></IonInput>
              </>

            </div>  

            <div className='Card' style={{background: '#FFEDD5'}}>
              <div  className='CardFrom'style={isMobile() ? {width: '80%'} : {}}>
                <IonIcon style={isMobile() ? {fontSize : '1.5em'}:{fontSize : '1.2em'}} className='CardIcon' icon={MAC}></IonIcon>
                <IonLabel>Mac-Adress</IonLabel>
              </div>

              <>
                <IonInput
                  placeholder='AA:BB:CC:DD:EE:FF' 
                  popoverTarget='MAC address del pc' 
                  required={true}
                  clearOnEdit={true}  
                  fill="outline"
                  mode='ios'
                  className='IonInput'
                  ref={this.macRef}
                ></IonInput>
              </>
              
            </div>      
            
            {!isMobile() &&
              <div className='BottonFrom'
                onClick={this.menu}
              >
                <IonText>Aggiungi</IonText>
              </div>    
            }


          </div>
        </IonContent>
        {isMobile() &&
          <footer className='footerMobile'>
            <div className='BottonFrom'
                onClick={this.menu}
              >
                <IonText>Aggiungi</IonText>
              </div> 
          </footer>
        }

      </IonPage>
    );
  }
}

export default PageAdd;