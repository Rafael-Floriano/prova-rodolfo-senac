import { getDataOfCompany } from "../../service/MercadoApiClient";


const CardComponent = () => {
    getDataOfCompany();
    return (
        <div className="conteiner-body-bb">
            <div className="title-page">
               <h2>Vem ser BB também! <span> 😀 </span></h2> 
            </div>
            <div className="primary-card-conteiner">
                <div>
                    <img src=""/>
                </div>
                <div>
                    <div className="mini-card">
                        <div className="title-mini-card">
                            <span>Mocked value</span>
                        </div>
                        <div className="value-mini-card">
                            <span>R$:</span>
                            <span>20.00</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default CardComponent;