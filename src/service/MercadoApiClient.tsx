import axios from "axios";

const webClient = axios.create({
    baseURL:'https://rvh98qbf-44321.brs.devtunnels.ms',
    headers: {'Content-Type':'application/x-www-form-urlencoded'}
});

export const getDataOfCompany = ()  => {
    webClient.get('/GetDataCompany/BBAS3').then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}