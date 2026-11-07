import React from 'react';
import { IonAlert, IonButton, IonIcon, IonLabel } from '@ionic/react';
import './PcCard.css';

import pc from '../../theme/Icon/desktop-outline.svg'
import option from '../../theme/Icon/ellipsis-horizontal-outline.svg'
import close from '../../theme/Icon/close-outline.svg'
import power from '../../theme/Icon/power-outline.svg'
import trash from '../../theme/Icon/trash-outline.svg'

import { deletePc, wakePC, shutdown } from '../../Typescript/pcService';
import isMobile from 'is-mobile';


type Props = {
  Name: string,
  MAC: string
  onDelete: () =>void
}

type State = {
  open: boolean,
  work: boolean,
  confirm: boolean,
  del:boolean,
  on: boolean,
  off: boolean

}

class PcCard extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
      work: false,
      confirm: false,
      del: false,
      on:false,
      off:false,

    }
  }


  handleDelete = async () => {
    await deletePc(this.props.Name as string);
    this.props.onDelete(); // ← avvisa Home di ricaricare
  }

  on = async ()=>{
    await wakePC(this.props.Name as string);
    this.setState({on: true});
    
    setTimeout( ()=>{
      this.setState({on: false});
      
    }, 1500);
    
  }

  off = async ()=>{
    await shutdown (this.props.Name as string);
    this.setState({off: true});
    
    setTimeout( ()=>{
      this.setState({off: false});
      
    }, 1500);
  }

  render() {
    const { open } = this.state;

    return (
      <>
        <IonAlert 
          isOpen ={this.state.confirm}
          header= 'Vuoi cancellare ?'
          message={`${this.props.Name}`}
          buttons={[
            {
              text: 'Si',
              handler: () =>{
                this.setState({confirm:false});
                this.handleDelete();
              }
              
            },
            {
              text: 'NO',
              handler: ()=>{
                this.setState({confirm:false});
              }
            }
          ]}  
        >

        </IonAlert>
      
        <div className={`CardGrid${open ? ' open' : ''}`}>

          {/* Prima riga — non cambia mai grid-area, niente scatti */}

          <div className={`IconPc${isMobile() ? ' IcPcMobile' : ''}`}>
            <IonIcon className={`icon${isMobile() ? ' icoMobile' : ''}`} icon={pc} />
          </div>

          <div className='Label'>
            <IonLabel class='label'>{this.props.Name}</IonLabel>
          </div>

          <div
            className={`Option${isMobile() ? ' OptionMobile' : ''}`}
            onClick={() => this.setState({ open: !open })}
          >
            <IonIcon className={`icon${isMobile() ? ' icoMobile' : ''}`} icon={open ? close : option} />
          </div>

          {/* Seconda riga — contenuto espanso, sempre nel DOM ma nascosto */}
          <div className='CardContent'>
            <div 
              className= {`Botton${isMobile() ? ' mobileB' : ''} power${this.state.on ? ' on' : ''}`}
              onClick={()=>{this.on();}}
            >
              <IonLabel>{this.state.on ? 'Avviato' : 'Avvia' }</IonLabel>
             

              {!this.state.on &&
                <IonIcon icon={power}></IonIcon>
              }
             
             
            </div>

            <div 
              className= {`Botton${isMobile() ? ' mobileB' : ''} power${!this.state.off ? ' off' : ' active'}`}
              onClick={()=>{this.off();}}
            >
              <IonLabel>{this.state.off ? 'Spento' : 'Spegni' }</IonLabel>
      
              {!this.state.off &&
                <IonIcon icon={power}></IonIcon>
              }
            
            
            </div>


            <div 
              className={`Botton delete ${isMobile() ? ' mobileB' : ''} `}
              onClick={()=>{this.setState({confirm:true})}}
            >
              <IonLabel>Cancella</IonLabel>
              <IonIcon icon={trash}></IonIcon>
            </div>


          </div>

        </div>
      </>
    );
  }
}

export default PcCard;