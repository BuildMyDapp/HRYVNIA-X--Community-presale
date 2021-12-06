import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import WalletConnectProvider from "@walletconnect/web3-provider";
import EthContract from "web3-eth-contract";

import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../contract/contract";
import { RootStateType } from "../store";

export type StateType = {
  web3: null | Web3;
  contract: null | EthContract.Contract;
  address: null;
  accounts: string[];
  web3LoadingErrorMessage: string;
  web3Loading: boolean;
  ErrorMessage: string;
  provider: null;
  returnRate: any;
  maxValue: any;
  minValue: any;
  tokenRemaining:any;
  ethRaised:any;
};

type Web3ConnectPayloadType = {
  web3: Web3;
  accounts: string[];
  web3Loading: boolean;
  marketPlaceContract: EthContract.Contract;
  returnRate: any;
  resultMax: any;
  resultMin: any;
  web3LoadingErrorMessage: any;
  tokenRemaining:any;
  ethRaised:any;
};

export const initialState: StateType = {
  web3: null,
  contract: null,
  address: null,
  accounts: [],
  web3LoadingErrorMessage: "",
  web3Loading: false,
  ErrorMessage: "",
  provider: null,
  returnRate: null,
  maxValue: null,
  minValue: null,
  tokenRemaining:null,
  ethRaised:null,
};



export const loadBlockchain = createAsyncThunk(
  "loadwalletcoonnect",
  async (_, thunkAPI) => {
    try {
      if (Web3.givenProvider && Web3.givenProvider.chainId == 0x38) {
        await Web3.givenProvider.enable();
        const web3 = new Web3(Web3.givenProvider);
        const accounts = await web3.eth.getAccounts();
        const marketPlaceContract: EthContract.Contract = new web3.eth.Contract(
          CONTRACT_ABI as AbiItem[],
          CONTRACT_ADDRESS
        );
        return {
          web3,
          accounts,
          marketPlaceContract,
        };
      } else {
        console.log("error connecting to metamask");
        return {
          web3LoadingErrorMessage: "error connecting to metamask"
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
);

// Connect with Wallet of users choice
export const loadWalletConnect = createAsyncThunk(
  "LoadWalletConnect",
  async (_, thunkAPI) => {
    try {
      const provider = new WalletConnectProvider({
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
        },
        chainId: 56,
      });
      console.log("Provider", provider);
      if (provider) {
        await provider.enable();
        const web3 = new Web3(provider as any);
        console.log("web3 state", web3)
        const accounts = await web3.eth.getAccounts();
        const marketPlaceContract: EthContract.Contract = new web3.eth.Contract(
          CONTRACT_ABI as AbiItem[],
          CONTRACT_ADDRESS
        );
        console.log("Contract", marketPlaceContract);
        return {
          web3,
          accounts,
          marketPlaceContract,
        };
      } else {
        return {
          web3LoadingErrorMessage:
            "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!",
        };
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const hasClosedAsync = createAsyncThunk(
  "hasClosed",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootStateType;
    const { contract, accounts, web3 } = state.web3Connect;
    const result = async () => {
      try {
        console.log("Started Minting NFT");
        let result = await contract ?.methods.hasClosed().call();
        return result;
      } catch (error) {
        console.log("User rejected the transaction");
        return error;
      }
    };
    const resulss = await result();
    console.log("RESULT OF RETURN___", resulss);
  }
);

export const isOpenAsync = createAsyncThunk("isOpen", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootStateType;
  const { contract, accounts, web3 } = state.web3Connect;

  try {
    console.log("Started Minting NFT");
    let result = await contract ?.methods.isOpen().call();
    return result;
  } catch (error) {
    console.log("User rejected the transaction");
    return error;
  }
});

export const rateAsync: any = createAsyncThunk("rate", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootStateType;
  const { contract, accounts, web3 } = state.web3Connect;
  try {
    console.log("Started Minting NFT , rateAsync");
    let result = await contract ?.methods.rate_().call();
    return result;
  } catch (error) {
    console.log("User rejected the transaction");
    return error;
  }
});

export const maxContributionAsync: any = createAsyncThunk(
  "maxContribution",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootStateType;
    const { contract, accounts, web3 } = state.web3Connect;
    try {
      console.log("Started Minting NFT");
      let result = await contract ?.methods._maxContribution().call();
      return result;
    } catch (error) {
      console.log("User rejected the transaction");
      return error;
    }
  }
);

export const minimumContributionAsync: any = createAsyncThunk(
  "_minimumContribution",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootStateType;
    const { contract, accounts, web3 } = state.web3Connect;
    try {
      console.log("Started Minting NFT");
      let result = await contract ?.methods._minimumContribution().call();
      return result;
    } catch (error) {
      console.log("User rejected the transaction");
      return error;
    }
  }
);

export const ethRaisedAsync: any = createAsyncThunk(
  "weiRaised",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootStateType;
    const { contract, accounts, web3 } = state.web3Connect;
    try {
      console.log("Started Minting NFT");
      let result = await contract ?.methods.weiRaised().call();
      return result;
    } catch (error) {
      console.log("User rejected the transaction");
      return error;
    }
  }
);


export const remainingTokenAsync: any = createAsyncThunk(
  "remainingTokenAsync",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootStateType;
    const { contract, accounts, web3 } = state.web3Connect;
    try {
      console.log("Started Minting NFT");
      let result = await contract ?.methods.remainingTokens().call();
      return result;
    } catch (error) {
      console.log("User rejected the transaction");
      return error;
    }
  }
);


type Data = {
  amount: number
}
export const buyTokensAsync: any = createAsyncThunk(
  "buyTokensAsync",
  async (data: Data, thunkAPI) => {
    const state = thunkAPI.getState() as RootStateType;
    const { contract, accounts, web3 } = state.web3Connect;
    let amount = data.amount
    try {
      console.log("Started Minting NFT");
      let result = await contract ?.methods.buyTokens(accounts[0]).send({ from: accounts[0], value: amount });
      return result;
    } catch (error) {
      console.log("User rejected the transaction");
      return error;
    }
  }
);


const web3ConnectSlice = createSlice({
  name: "Web3Connect",
  initialState,
  reducers: {},
  extraReducers: {
    [loadWalletConnect.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      state.web3 = payload ?.web3;
      state.accounts = payload ?.accounts;
      state.web3Loading = false;
      state.contract = payload ?.marketPlaceContract;
      state.web3LoadingErrorMessage = payload ?.web3LoadingErrorMessage
    },
    [loadBlockchain.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      console.log("payload>>>", payload)
      state.web3 = payload ?.web3;
      state.accounts = payload ?.accounts;
      state.web3Loading = false;
      state.contract = payload ?.marketPlaceContract;
      state.web3LoadingErrorMessage = payload ?.web3LoadingErrorMessage
    },
    [rateAsync.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      console.log("rateAsync", payload);
      state.returnRate = payload;
    },
    [maxContributionAsync.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      console.log("maximumAsync", payload);
      state.maxValue = payload;
    },
    [minimumContributionAsync.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      console.log("minimumAsybc", payload);
      state.minValue = payload;
    },
    [ethRaisedAsync.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      console.log("ethRaised", payload);
      state.ethRaised = payload;
    },
    [remainingTokenAsync.fulfilled.toString()]: (
      state,
      { payload }: PayloadAction<Web3ConnectPayloadType>
    ) => {
      console.log("tokenRemaing", payload);
      state.tokenRemaining = payload;
    },
  },
});

export const web3Reducer = web3ConnectSlice.reducer;
