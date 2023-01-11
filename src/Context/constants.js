// import cvp from "../artifacts/contracts/Cvp.sol/Cvp.json";
import cvp from "../artifacts/contracts/Temp.sol/Storage.json";

// export const CVPAddress = "0x0b81c4a0D021E2210F983BBe9b2aB67a34FAF455";
export const CVPAddress = "0xE2bB2A2c6B5bC829322f1672788Ea85e1c188788";
// export const CvpABI = cvp.abi;
export const CvpABI = cvp.abi;

export const ChainId = {
	MAINNET: 1, // Ethereum
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

export const getRPCProvider = (chainId) => {
	switch (chainId) {
		case 1:
			return "https://eth-mainnet.g.alchemy.com/v2/YMRFBPG1iyBwiRQIHThSWZanZj0NXUjv";
		case 5:
			return "https://eth-goerli.alchemyapi.io/v2/lmW2og_aq-OXWKYRoRu-X6Yl6wDQYt_2";
		case 80001:
			return "https://polygon-mumbai.g.alchemy.com/v2/Q4WqQVxhEEmBYREX22xfsS2-s5EXWD31";
		case 137:
			return "https://polygon-mainnet.g.alchemy.com/v2/6Tn--QDkp1vRBXzRV3Cc8fLXayr5Yoij";
		default:
			return "https://eth-mainnet.g.alchemy.com/v2/YMRFBPG1iyBwiRQIHThSWZanZj0NXUjv";
	}
};

export const getSupportedChains = () => {};
