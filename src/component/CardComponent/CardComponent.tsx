import "./CardComponent.css";
import { getCompanyData } from "../../service/MercadoApiClient";
import { useEffect, useState } from 'react';
import { CompanyInterface } from "../../interface/CompanyInterface";


const CardComponent = () => {

    const [company, setCompany] = useState<CompanyInterface>();
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getCompanyData()
        .then((response:any) => {
          setCompany(response.data);
          setLoading(false);
        })
        .catch((err:any) => {
          setError(err.message);
          setLoading(false);
        });
    }, []);
    
    
    return (
        <div className="conteiner-body-bb">
            <div className="title-page">
               <h2>Vem ser BB também! <span> 😀 </span></h2> 
               <div className="conteiner-image">
                    <img src="https://s3-symbol-logo.tradingview.com/banco-do-brasil--big.svg"/>
                </div>
            </div>
            <div className="primary-card-conteiner">
                <div className="conteiner-row">
                    <div className="row">
                        <div className="mini-card">
                            <div className="title-mini-card">
                                <span>Valor atual</span>
                            </div>
                            <div className="value-mini-card">
                                <span>R$: </span>
                                <span>{company?.regularMarketPrice}</span>
                            </div>
                        </div>
                        <div className="mini-card">
                            <div className="title-mini-card">
                                <span>Maior valor no dia</span>
                            </div>
                            <div className="value-mini-card">
                                <span>R$: </span>
                                <span>{company?.regularMarketDayHigh}</span>
                            </div>
                        </div>
                        <div className="mini-card">
                            <div className="title-mini-card">
                                <span>Menor Valor no dia</span>
                            </div>
                            <div className="value-mini-card">
                                <span>R$: </span>
                                <span>{company?.regularMarketDayLow}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mini-card">
                            <div className="title-mini-card">
                                <span>Máxima 52 Semanas</span>
                            </div>
                            <div className="value-mini-card">
                                <span>R$: </span>
                                <span>{company?.fiftyTwoWeekHigh}</span>
                            </div>
                        </div>
                        <div className="mini-card">
                            <div className="title-mini-card">
                                <span>Variação Máxima 52 Semanas</span>
                            </div>
                            <div className="value-mini-card">
                                <span>R$: </span>
                                <span>{company?.fiftyTwoWeekHighChange}</span>
                            </div>
                        </div>
                        <div className="mini-card">
                            <div className="title-mini-card">
                                <span>Mínima 52 Semanas</span>
                            </div>
                            <div className="value-mini-card">
                                <span>R$: </span>
                                <span>{company?.fiftyTwoWeekLow}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default CardComponent;