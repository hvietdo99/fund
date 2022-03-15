import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9ea6929809B31b7f7B418d88263462BD6BEFf9bF"
);

export default instance;