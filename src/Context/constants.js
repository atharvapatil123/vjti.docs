import cvp from "../artifacts/contracts/Cvp.sol/Cvp.json";

export const CVPAddress = "0x2A4b6DBfe206Ffb1afe48C3c015BE8cc4e81b23C";
export const CvpABI = cvp.abi;

export const ChainId = {
	MAINNET: 1,
	GOERLI: 5,
	POLYGON_MUMBAI: 80001,
	POLYGON_MAINNET: 137,
};

export let activeChainId = ChainId.POLYGON_MUMBAI;
export const supportedChains = [
	ChainId.GOERLI,
	ChainId.POLYGON_MAINNET,
	ChainId.POLYGON_MUMBAI,
];
