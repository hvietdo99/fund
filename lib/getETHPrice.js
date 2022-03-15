import axios from "axios";
export const getETHPrice = async () => {
  try {
    const response = await axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
    );
    const data = response.data;
    const ethPrice = data[0].current_price;
    return parseFloat(parseFloat(ethPrice).toFixed(2));
  } catch (error) {
    console.log(error);
  }
};

const getWEIPriceInUSD = (usd, wei) => {
  return parseFloat(convertWeiToETH(wei) * usd).toFixed(2);
};
const getETHPriceInUSD = (usd, eth) => {
  return parseFloat(eth * usd).toFixed(2);
};

const convertWeiToETH = (wei) => {
  return parseFloat(wei) / 1000000000000000000;
};

export { getWEIPriceInUSD, getETHPriceInUSD, convertWeiToETH }