import {atom} from "recoil"

export const AccountState = atom({
    key: 'AccountState',
    default: {},
  });


export const BidderState = atom({
  key: 'bids',
  default:[],
});

export const BidOutcomeState = atom({
  key: 'bidOutcome',
  default:"",
});
export const TimeoutState = atom({
  key: 'TimeOut',
  default:"Ongoing",
});