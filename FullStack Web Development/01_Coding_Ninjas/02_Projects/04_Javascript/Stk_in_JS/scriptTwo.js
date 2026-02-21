import { getStocks, getStockStats } from "./chart1.js";
let start;
export default async function fatchCreatChart(max = '5y', Ele = 'AMRN') {

    const url = `https://stock-market-api-k9vl.onrender.com/api/stocksdata`;
    start = Ele;
    try {
        const response = await fetch(url);
        const ans = await response.json();

        let charData = ans.stocksData[0][start][max].value;
        let TimeStamp = ans.stocksData[0][start][max].timeStamp;

        TimeStamp = TimeStamp.map((time) => new Date(time * 1000).toLocaleDateString());

        drawChart(charData, TimeStamp, start);
        getStocks(start);
        getStockStats(start);
    } catch (err) {
        console.log(err);
    }
}