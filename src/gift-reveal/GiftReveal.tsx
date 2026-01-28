import React, { useContext } from 'react';
import { contextApp } from '../provider/ProviderApp';
import "./GiftReveal.scss";

export const GiftReveal = () => {
    const { state } = useContext(contextApp);
    const { winMethod } = state;

    return (
        <section id="gift-reveal">
            
            <h1 className={winMethod === 'skill' ? 'win-skill' : ''}>
                {winMethod === 'skill' ? "POLE POSITION!" : "BOX BOX BOX..."}
            </h1>
            
            <div className="message">
                {winMethod === 'skill' 
                    ? "Incredibile! Hai dei riflessi degni di un pilota. Ti sei guadagnato il gradino più alto del podio!"
                    : "Forse la partenza non è il tuo forte, ma non importa! La scuderia ha deciso di premiarti comunque per l'impegno."
                }
                <br/><br/>
                <strong>PREPARA LE VALIGIE, SI PARTE!</strong>
            </div>

            <div className="tickets-container">
                {/* BIGLIETTO F1 */}
                <div className="ticket f1-ticket">
                    <div className="ticket-header">
                        <h3>F1 BRITISH GRAND PRIX</h3>
                        <span className="logo">F1 GIFT</span>
                    </div>
                    <div className="ticket-body">
                        <div className="info-block">
                            <label>Circuito</label>
                            <span className="big">SILVERSTONE</span>
                        </div>
                        <div className="info-block">
                            <label>Date</label>
                            <span>03 - 05 LUGLIO</span>
                        </div>
                        <div className="info-block">
                            <label>Pacchetto</label>
                            <span>3 Days (Fri-Sat-Sun)</span>
                        </div>
                        <div className="info-block">
                            <label>Accesso</label>
                            <span>General Admission</span>
                        </div>
                    </div>
                </div>

                {/* VOLO ANDATA */}
                <div className="ticket flight-ticket">
                    <div className="ticket-header">
                        <h3>VOLO ANDATA</h3>
                        <span className="logo">Wizz Air UK</span>
                    </div>
                    <div className="ticket-body">
                        <div className="info-block" style={{gridColumn: "1 / -1"}}>
                            <div className="flight-path">
                                <span>TRN (Turin)</span>
                                <i className="fa-solid fa-plane"></i>
                                <span>LTN (London)</span>
                            </div>
                        </div>
                        <div className="info-block">
                            <label>Data</label>
                            <span>Gio 2 Luglio</span>
                        </div>
                        <div className="info-block">
                            <label>Orario</label>
                            <span>15:50 - 16:50</span>
                        </div>
                        <div className="info-block">
                            <label>Volo</label>
                            <span>W95378</span>
                        </div>
                    </div>
                </div>

                {/* VOLO RITORNO */}
                <div className="ticket flight-ticket">
                    <div className="ticket-header ryanair">
                        <h3>VOLO RITORNO</h3>
                        <span className="logo">Ryanair</span>
                    </div>
                    <div className="ticket-body">
                        <div className="info-block" style={{gridColumn: "1 / -1"}}>
                            <div className="flight-path">
                                <span>STN (London)</span>
                                <i className="fa-solid fa-plane"></i>
                                <span>TRN (Turin)</span>
                            </div>
                        </div>
                        <div className="info-block">
                            <label>Data</label>
                            <span>Lun 6 Luglio</span>
                        </div>
                        <div className="info-block">
                            <label>Orario</label>
                            <span>14:05 - 17:00</span>
                        </div>
                        <div className="info-block">
                            <label>Volo</label>
                            <span>FR466</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
