import React from 'react';
import {
  IonButton, IonContent, IonHeader, IonIcon, IonicSlides, IonList, IonModal, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './Home.css';
import { getPcs, Pc } from '../../Typescript/pcService';

import PageAdd from '../AddPc/PageAdd';
import PcCard from '../Pc/PcCard';

import lan from '../../theme/Icon/local-network.svg'
import plus from '../../theme/Icon/add-outline.svg'
import isMobile from 'is-mobile';

type OwnProps = {};
type Props = OwnProps & RouteComponentProps;

type State = {
  isModalOpen: boolean,

  pcs: Pc[],

};

class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      isModalOpen: false,
      pcs: [
        { nome: 'Fabio', mac: 'null' }, // Oggetto completo
      ]

    };
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }

  componentDidMount() {
    this.caricaPcs();
  }

  caricaPcs = async () => {
    const pcs = await getPcs();
    this.setState({ pcs });
  }

  render() {
    return (
      <IonPage>
        <IonHeader className='Header'>
          <div className="HeaderGrid">
            <div className={`HeaderIconLan${isMobile() ? ' HILanMobile' : ''}`}>
              <IonIcon 
                className={`HeaderIcon${isMobile() ? ' HImoblie Lan' : ''}`}
                icon={lan}
              ></IonIcon>
            </div>

            <IonTitle className={`HeaderTitle${isMobile() ? ' HTmoblie' : ''}`}>Wake On Lan</IonTitle>

            <div className = "HeaderIconPlus" >
              <IonIcon
                className={`HeaderIcon${isMobile() ? ' HImoblie' : ''}`} 
                icon={plus}
                onClick={()=>{
                  this.setState({ isModalOpen: true });
                }}
              ></IonIcon>
            </div>

          </div>
        </IonHeader>
        <IonContent scrollX={false}>

          <IonModal isOpen={this.state.isModalOpen} onDidDismiss={this.closeModal}>
            <PageAdd 
              onClose= {this.closeModal}
              reload={this.caricaPcs} 
            />
          </IonModal>

          <div className='CardConteiner'>

            {this.state.pcs.map((pc,i )=>(
              <PcCard 
                key={pc.nome}
                onDelete={this.caricaPcs}
                Name={pc.nome}
                MAC={pc.mac}
              ></PcCard>
            ))}
            
          </div>


          
          

        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(Home);