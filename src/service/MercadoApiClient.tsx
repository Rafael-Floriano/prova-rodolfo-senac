import axios from "axios";
import { CompanyInterface } from "../interface/CompanyInterface";

const webClient = axios.create({
    baseURL:'https://rvh98qbf-44321.brs.devtunnels.ms',
    headers: {'Content-Type': 'application/json'}
});

export const getCompanyData = (actionCode: string)  => {
    return webClient.get<any>('/GetDataCompany/BBAS3');
 }