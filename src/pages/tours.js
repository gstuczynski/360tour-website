import React from 'react';
import Iframe from 'react-iframe'
import style from '../styles/tours.module.styl'
import Fullscreen from "react-full-screen"

class Tours extends React.Component {

    constructor(props) {
        super();
     
        this.state = {
          isFullBonarka: false,
          isFullPlaszow: false,
        };
      }
     
      goFullBonarka = () => {
        this.setState({ isFullBonarka: true });
      }

      goFullPlaszow = () => {
        this.setState({ isFullPlaszow: true });
      }

      render() {
          return (
            <div className={style.tours}>
                    <div className={style.tourWrapper}>
                    <div className={style.tour}>
                        <Fullscreen
                            enabled={this.state.isFullPlaszow}
                            >
                            <Iframe url="http://165.227.166.209:3100/plaszow/"

                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                                allowFullScreen/>
                        </Fullscreen>
                    </div>
                            <div className={style.text}>
                                Jakiś text z opisem tego gówna <br />
                                <button onClick={this.goFullPlaszow}>Otwórz FullScreen</button>
                            </div>
                    </div>
                    <div className={style.tourWrapper}>

                            <div className={style.text}>
                                Jakiś text z opisem tego gówna <br />
                                <button onClick={this.goFullBonarka}>Otwórz FullScreen</button>
                            </div>

                                                <div className={style.tour}>
                        <Fullscreen
                            enabled={this.state.isFullBonarka}
                            >
                            <Iframe url="http://165.227.166.209:3100/bonarka/"

                                id="myId"
                                className="myClassname"
                                display="initial"
                                position="relative"
                                allowFullScreen/>
                        </Fullscreen>
                    </div>
                    </div>
          </div>
          )
      }
}
export default Tours;
