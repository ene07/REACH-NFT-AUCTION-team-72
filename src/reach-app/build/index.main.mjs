// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bidder_bid0_67: ctc4,
    Bidder_optIn0_67: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc8 = stdlib.T_Null;
  
  
  const [v336, v337, v361, v362, v363, v364, v365] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v395 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:51:29:application call to [unknown function] (defined at: ./index.rsh:51:29:function exp)', 'at ./index.rsh:40:20:application call to "runBidder_bid0_67" (defined at: ./index.rsh:51:10:function exp)', 'at ./index.rsh:40:20:application call to [unknown function] (defined at: ./index.rsh:40:20:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v396 = v395[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v398 = stdlib.gt(v396, v364);
  stdlib.assert(v398, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:52:13:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:29:application call to [unknown function] (defined at: ./index.rsh:51:29:function exp)', 'at ./index.rsh:40:20:application call to "runBidder_bid0_67" (defined at: ./index.rsh:51:10:function exp)', 'at ./index.rsh:40:20:application call to [unknown function] (defined at: ./index.rsh:40:20:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  const v405 = ['Bidder_bid0_67', v395];
  
  const txn1 = await (ctc.sendrecv({
    args: [v336, v337, v361, v362, v363, v364, v365, v405],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v396, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v413], secs: v415, time: v414, didSend: v203, from: v412 } = txn1;
      
      switch (v413[0]) {
        case 'Bidder_bid0_67': {
          const v416 = v413[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v421 = v416[stdlib.checkedBigNumberify('./index.rsh:51:10:spread', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v421,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v432 = [v362, v364];
          const v433 = await txn1.getOutput('Bidder_bid', 'v432', ctc7, v432);
          
          if (v363) {
            const v975 = v412;
            const v976 = false;
            const v977 = v421;
            const v978 = v414;
            const v980 = stdlib.le(v365, v361);
            if (v980) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v412,
                tok: v337
                });
              sim_r.txns.push({
                kind: 'from',
                to: v336,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v337
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v362,
              tok: undefined /* Nothing */
              });
            const v981 = v412;
            const v982 = false;
            const v983 = v421;
            const v984 = v414;
            const v986 = stdlib.le(v365, v361);
            if (v986) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v412,
                tok: v337
                });
              sim_r.txns.push({
                kind: 'from',
                to: v336,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v337
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Bidder_optIn0_67': {
          const v457 = v413[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v413], secs: v415, time: v414, didSend: v203, from: v412 } = txn1;
  switch (v413[0]) {
    case 'Bidder_bid0_67': {
      const v416 = v413[1];
      undefined /* setApiDetails */;
      const v421 = v416[stdlib.checkedBigNumberify('./index.rsh:51:10:spread', stdlib.UInt_max, '0')];
      const v422 = stdlib.gt(v421, v364);
      stdlib.assert(v422, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:52:13:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:29:application call to [unknown function] (defined at: ./index.rsh:51:29:function exp)', 'at ./index.rsh:40:20:application call to [unknown function] (defined at: ./index.rsh:51:29:function exp)', 'at ./index.rsh:40:20:application call to [unknown function] (defined at: ./index.rsh:40:20:function exp)'],
        msg: 'bid is too low',
        who: 'Bidder_bid'
        });
      ;
      const v432 = [v362, v364];
      const v433 = await txn1.getOutput('Bidder_bid', 'v432', ctc7, v432);
      if (v203) {
        stdlib.protect(ctc8, await interact.out(v416, v433), {
          at: './index.rsh:51:11:application',
          fs: ['at ./index.rsh:51:11:application call to [unknown function] (defined at: ./index.rsh:51:11:function exp)', 'at ./index.rsh:54:15:application call to "notify" (defined at: ./index.rsh:53:27:function exp)', 'at ./index.rsh:53:27:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v363) {
        const v975 = v412;
        const v976 = false;
        const v977 = v421;
        const v978 = v414;
        const v980 = stdlib.le(v365, v361);
        if (v980) {
          return;
          }
        else {
          ;
          ;
          return;
          }}
      else {
        ;
        const v981 = v412;
        const v982 = false;
        const v983 = v421;
        const v984 = v414;
        const v986 = stdlib.le(v365, v361);
        if (v986) {
          return;
          }
        else {
          ;
          ;
          return;
          }}
      break;
      }
    case 'Bidder_optIn0_67': {
      const v457 = v413[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc2]);
  const ctc6 = stdlib.T_Data({
    Bidder_bid0_67: ctc5,
    Bidder_optIn0_67: ctc4
    });
  const ctc7 = stdlib.T_Null;
  
  
  const [v336, v337, v361, v362, v363, v364, v365] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v387 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:44:28:application call to [unknown function] (defined at: ./index.rsh:44:28:function exp)', 'at ./index.rsh:40:20:application call to "runBidder_optIn0_67" (defined at: ./index.rsh:44:10:function exp)', 'at ./index.rsh:40:20:application call to [unknown function] (defined at: ./index.rsh:40:20:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v391 = ['Bidder_optIn0_67', v387];
  
  const txn1 = await (ctc.sendrecv({
    args: [v336, v337, v361, v362, v363, v364, v365, v391],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v413], secs: v415, time: v414, didSend: v203, from: v412 } = txn1;
      
      switch (v413[0]) {
        case 'Bidder_bid0_67': {
          const v416 = v413[1];
          
          break;
          }
        case 'Bidder_optIn0_67': {
          const v457 = v413[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          ;
          const v492 = await txn1.getOutput('Bidder_optIn', 'v337', ctc1, v337);
          
          const v1005 = v362;
          const v1006 = v363;
          const v1007 = v364;
          const v1008 = v414;
          const v1010 = stdlib.le(v365, v361);
          if (v1010) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v362,
              tok: v337
              });
            if (v363) {
              sim_r.txns.push({
                kind: 'halt',
                tok: v337
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v336,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v337
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v413], secs: v415, time: v414, didSend: v203, from: v412 } = txn1;
  switch (v413[0]) {
    case 'Bidder_bid0_67': {
      const v416 = v413[1];
      return;
      break;
      }
    case 'Bidder_optIn0_67': {
      const v457 = v413[1];
      undefined /* setApiDetails */;
      ;
      const v492 = await txn1.getOutput('Bidder_optIn', 'v337', ctc1, v337);
      if (v203) {
        stdlib.protect(ctc7, await interact.out(v457, v492), {
          at: './index.rsh:44:11:application',
          fs: ['at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:11:function exp)', 'at ./index.rsh:46:10:application call to "k" (defined at: ./index.rsh:45:22:function exp)', 'at ./index.rsh:45:22:application call to [unknown function] (defined at: ./index.rsh:45:22:function exp)'],
          msg: 'out',
          who: 'Bidder_optIn'
          });
        }
      else {
        }
      
      const v1005 = v362;
      const v1006 = v363;
      const v1007 = v364;
      const v1008 = v414;
      const v1010 = stdlib.le(v365, v361);
      if (v1010) {
        return;
        }
      else {
        ;
        if (v363) {
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    lenInBlock: ctc0,
    minBid: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    Bidder_bid0_67: ctc4,
    Bidder_optIn0_67: ctc5
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Tuple([ctc7, ctc0]);
  const ctc9 = stdlib.T_Bool;
  
  
  const v329 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:26:65:application',
    fs: ['at ./index.rsh:25:15:application call to [unknown function] (defined at: ./index.rsh:25:18:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v330 = v329.lenInBlock;
  const v331 = v329.minBid;
  const v332 = v329.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v332, v331, v330],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v337, v338, v339], secs: v341, time: v340, didSend: v35, from: v336 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v337
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v337, v338, v339], secs: v341, time: v340, didSend: v35, from: v336 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v336, v337, v338, v339, v340],
    evt_cnt: 0,
    funcNum: 1,
    lct: v340,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:31:14:decimal', stdlib.UInt_max, '1'), v337]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v348, time: v347, didSend: v42, from: v346 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:31:14:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v337
        });
      
      const v361 = stdlib.safeAdd(v340, v339);
      const v362 = v336;
      const v363 = true;
      const v364 = v338;
      const v365 = v347;
      const v366 = v340;
      
      if (await (async () => {
        const v380 = stdlib.le(v366, v361);
        
        return v380;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v362,
          tok: v337
          });
        if (v363) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v337
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v336,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v337
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v348, time: v347, didSend: v42, from: v346 } = txn2;
  ;
  ;
  const v355 = stdlib.addressEq(v336, v346);
  stdlib.assert(v355, {
    at: './index.rsh:33:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.auctionReady(), {
    at: './index.rsh:34:32:application',
    fs: ['at ./index.rsh:34:32:application call to [unknown function] (defined at: ./index.rsh:34:32:function exp)', 'at ./index.rsh:34:32:application call to "liftedInteract" (defined at: ./index.rsh:34:32:application)'],
    msg: 'auctionReady',
    who: 'Creator'
    });
  
  const v361 = stdlib.safeAdd(v340, v339);
  let v362 = v336;
  let v363 = true;
  let v364 = v338;
  let v365 = v347;
  let v366 = v340;
  
  while (await (async () => {
    const v380 = stdlib.le(v366, v361);
    
    return v380;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v361],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v336, v337, v361, v362, v363, v364, v365],
        evt_cnt: 0,
        funcNum: 4,
        lct: v365,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:64:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v500, time: v499, didSend: v269, from: v498 } = txn4;
          
          ;
          
          const cv362 = v362;
          const cv363 = v363;
          const cv364 = v364;
          const cv365 = v499;
          const cv366 = v365;
          
          await (async () => {
            const v362 = cv362;
            const v363 = cv363;
            const v364 = cv364;
            const v365 = cv365;
            const v366 = cv366;
            
            if (await (async () => {
              const v380 = stdlib.le(v366, v361);
              
              return v380;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v362,
                tok: v337
                });
              if (v363) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v337
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v336,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v337
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc7, ctc1, ctc0, ctc7, ctc9, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v500, time: v499, didSend: v269, from: v498 } = txn4;
      ;
      const v501 = stdlib.addressEq(v336, v498);
      stdlib.assert(v501, {
        at: './index.rsh:64:17:dot',
        fs: ['at ./index.rsh:63:36:application call to [unknown function] (defined at: ./index.rsh:63:36:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      stdlib.protect(ctc3, await interact.showTimeout(), {
        at: './index.rsh:65:37:application',
        fs: ['at ./index.rsh:65:37:application call to [unknown function] (defined at: ./index.rsh:65:37:function exp)', 'at ./index.rsh:65:37:application call to "liftedInteract" (defined at: ./index.rsh:65:37:application)', 'at ./index.rsh:63:36:application call to [unknown function] (defined at: ./index.rsh:63:36:function exp)'],
        msg: 'showTimeout',
        who: 'Creator'
        });
      
      const cv362 = v362;
      const cv363 = v363;
      const cv364 = v364;
      const cv365 = v499;
      const cv366 = v365;
      
      v362 = cv362;
      v363 = cv363;
      v364 = cv364;
      v365 = cv365;
      v366 = cv366;
      
      continue;
      }
    else {
      const {data: [v413], secs: v415, time: v414, didSend: v203, from: v412 } = txn3;
      switch (v413[0]) {
        case 'Bidder_bid0_67': {
          const v416 = v413[1];
          undefined /* setApiDetails */;
          const v421 = v416[stdlib.checkedBigNumberify('./index.rsh:51:10:spread', stdlib.UInt_max, '0')];
          const v422 = stdlib.gt(v421, v364);
          stdlib.assert(v422, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:52:13:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:51:29:application call to [unknown function] (defined at: ./index.rsh:51:29:function exp)', 'at ./index.rsh:40:20:application call to [unknown function] (defined at: ./index.rsh:51:29:function exp)', 'at ./index.rsh:40:20:application call to [unknown function] (defined at: ./index.rsh:40:20:function exp)'],
            msg: 'bid is too low',
            who: 'Creator'
            });
          ;
          const v432 = [v362, v364];
          await txn3.getOutput('Bidder_bid', 'v432', ctc8, v432);
          if (v363) {
            stdlib.protect(ctc3, await interact.showBid(v412, v421), {
              at: './index.rsh:59:33:application',
              fs: ['at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)', 'at ./index.rsh:59:33:application call to "liftedInteract" (defined at: ./index.rsh:59:33:application)', 'at ./index.rsh:53:27:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)'],
              msg: 'showBid',
              who: 'Creator'
              });
            
            const cv362 = v412;
            const cv363 = false;
            const cv364 = v421;
            const cv365 = v414;
            const cv366 = v365;
            
            v362 = cv362;
            v363 = cv363;
            v364 = cv364;
            v365 = cv365;
            v366 = cv366;
            
            continue;}
          else {
            ;
            stdlib.protect(ctc3, await interact.showBid(v412, v421), {
              at: './index.rsh:59:33:application',
              fs: ['at ./index.rsh:59:33:application call to [unknown function] (defined at: ./index.rsh:59:33:function exp)', 'at ./index.rsh:59:33:application call to "liftedInteract" (defined at: ./index.rsh:59:33:application)', 'at ./index.rsh:53:27:application call to [unknown function] (defined at: ./index.rsh:53:27:function exp)'],
              msg: 'showBid',
              who: 'Creator'
              });
            
            const cv362 = v412;
            const cv363 = false;
            const cv364 = v421;
            const cv365 = v414;
            const cv366 = v365;
            
            v362 = cv362;
            v363 = cv363;
            v364 = cv364;
            v365 = cv365;
            v366 = cv366;
            
            continue;}
          break;
          }
        case 'Bidder_optIn0_67': {
          const v457 = v413[1];
          undefined /* setApiDetails */;
          ;
          await txn3.getOutput('Bidder_optIn', 'v337', ctc1, v337);
          const cv362 = v362;
          const cv363 = v363;
          const cv364 = v364;
          const cv365 = v414;
          const cv366 = v365;
          
          v362 = cv362;
          v363 = cv363;
          v364 = cv364;
          v365 = cv365;
          v366 = cv366;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  if (v363) {
    stdlib.protect(ctc3, await interact.showOutcome(v362, v364), {
      at: './index.rsh:73:33:application',
      fs: ['at ./index.rsh:73:33:application call to [unknown function] (defined at: ./index.rsh:73:33:function exp)', 'at ./index.rsh:73:33:application call to "liftedInteract" (defined at: ./index.rsh:73:33:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc3, await interact.showOutcome(v362, v364), {
      at: './index.rsh:73:33:application',
      fs: ['at ./index.rsh:73:33:application call to [unknown function] (defined at: ./index.rsh:73:33:function exp)', 'at ./index.rsh:73:33:application call to "liftedInteract" (defined at: ./index.rsh:73:33:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_optIn5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()uint64`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()uint64`]
    },
  appApproval: `BiALAAEEBQgoIP+YltgHUVmgjQYmAgEAACI1ADEYQQNsKWRJIls1ASEEWzUCNhoAF0lBADUiNQQjNQZJIQcMQAAUIQcSRCk1/4ABATT/UCEEr1BCAIiBoJu8gQESRDYaATX/KDT/UEIAdDYaAhc1BDYaAzYaARdJgQMMQAFJSSQMQABZJBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQVbNf6ABJEnNPOwMgY0/g9ENP8xABJENP80AyEGWzT+NANXMCA0A1dQARc0AyEIWzIGNAMhCVtCAb9IJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/IQZbNf4hBVs1/VcwIDX8V1ABFzX7IQhbNfohCVs1+Uk1BTX4gASR8aeaNPhQsDIGNP0MRDT4IlVAAGk0+FcBCDX3NPcXSTX2NPoNRDT2iAJegAgAAAAAAAABsDT8NPoWUFCwNPw0+hZQNQc0+0EAEjT/NP40/TEAIjT2MgY0+UIBHrEisgE0+rIII7IQNPyyB7M0/zT+NP0xACI09jIGNPlCAPyACAAAAAAAAAFRNP4WULA0/hY1BzT/NP40/TT8NPs0+jIGNPlCANVJIwxAAFcjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQZbNf6BOFs1/YAEmouRdLAjNP6IAcA0/zEAEkQ0/zT+NP00A4EwWwg0/yM0AyEFWzIGNP1CAHhIIQqIAYEiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQRbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULAhCogBRrEisgEishIkshAyCrIUNP+yEbMxADT/FlA0/hZQNP0WUDIGFlAoSwFXAEBnSCM1ATIGNQJCAL01/zX+Nf01/DX7Nfo1+TX4NP80+g5BAC40+DT5FlA0+hZQNPtQNPwWUQcIUDT9FlA0/hZQKEsBVwBhZ0glNQEyBjUCQgB3sSKyASOyEiSyEDT7shQ0+bIRszT8QQAasSKyASKyEiSyEDIJshUyCrIUNPmyEbNCACqxIrIBNP2yCCOyEDT4sgezsSKyASKyEiSyEDIJshUyCrIUNPmyEbNCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v337",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v337",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_Bidder_bid0_67",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_optIn0_67",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T11",
                "name": "v413",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v337",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v432",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T12",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bidder_optIn",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_Bidder_bid0_67",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bidder_optIn0_67",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T11",
                "name": "v413",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620018e8380380620018e883398101604081905262000026916200028b565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000184565b620000e36040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825293518401516060808901918252436080808b0182815260016000819055929092558751808a019a909a5294519095168887015291519187019190915251908501525160a0808501919091528151808503909101815260c0909301905281516200017b926002920190620001ae565b50505062000374565b81620001aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001bc9062000337565b90600052602060002090601f016020900481019282620001e057600085556200022b565b82601f10620001fb57805160ff19168380011785556200022b565b828001600101855582156200022b579182015b828111156200022b5782518255916020019190600101906200020e565b50620002399291506200023d565b5090565b5b808211156200023957600081556001016200023e565b604051606081016001600160401b03811182821017156200028557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029f57600080fd5b604080519081016001600160401b0381118282101715620002d057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ea57600080fd5b620002f462000254565b60208501519092506001600160a01b03811681146200031257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200034c57607f821691505b602082108114156200036e57634e487b7160e01b600052602260045260246000fd5b50919050565b61156480620003846000396000f3fe6080604052600436106100795760003560e01c80639afd0bea1161004b5780639afd0bea146100ee578063a7661d5414610101578063ab53f2c614610114578063b62792241461013757005b80631e93b0f1146100825780632c10a159146100a65780634a96cc0b146100b957806383230757146100d957005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004611071565b61016e565b6100c1610192565b6040516001600160a01b03909116815260200161009d565b3480156100e557600080fd5b50600154610093565b6100806100fc366004611089565b6101c2565b61008061010f366004611071565b6101e2565b34801561012057600080fd5b50610129610202565b60405161009d9291906110c7565b61014a610145366004611101565b61029f565b6040805182516001600160a01b03168152602092830151928101929092520161009d565b610176610e8f565b61018e610188368490038401846111c1565b826102e8565b5050565b600061019c610eba565b602081015151600190526101ae610e8f565b6101b882826104d1565b6020015192915050565b6101ca610e8f565b61018e6101dc3684900384018461123b565b826104d1565b6101ea610e8f565b61018e6101fc368490038401846111c1565b82610870565b600060606000546002808054610217906112e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610243906112e0565b80156102905780601f1061026557610100808354040283529160200191610290565b820191906000526020600020905b81548152906001019060200180831161027357829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102bb610eba565b602081810180515160009052515101518390526102d6610e8f565b6102e082826104d1565b519392505050565b6102f8600160005414600b610a38565b815161031390158061030c57508251600154145b600c610a38565b600080805560028054610325906112e0565b80601f0160208091040260200160405190810160405280929190818152602001828054610351906112e0565b801561039e5780601f106103735761010080835404028352916020019161039e565b820191906000526020600020905b81548152906001019060200180831161038157829003601f168201915b50505050508060200190518101906103b69190611331565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161040d34156008610a38565b6104276104203383602001516001610a5e565b6009610a38565b805161043f906001600160a01b03163314600a610a38565b610447610ed9565b815181516001600160a01b03918216905260208084015183519216910152608082015160608301516104799190610a76565b81516040908101919091528251602080840180516001600160a01b039093169092528151600191015283820151815190920191909152805143606090910152608080840151915101526104cb81610ac9565b50505050565b6104e16005600054146010610a38565b81516104fc9015806104f557508251600154145b6011610a38565b60008080556002805461050e906112e0565b80601f016020809104026020016040519081016040528092919081815260200182805461053a906112e0565b80156105875780601f1061055c57610100808354040283529160200191610587565b820191906000526020600020905b81548152906001019060200180831161056a57829003601f168201915b505050505080602001905181019061059f91906113bb565b90506105a9610f2e565b6105ba826040015143106012610a38565b7f39ae3ba5ee3db2e9c76c06676722712e4f649f643eb75593d77bfa217c7b420033856040516105eb929190611468565b60405180910390a1600060208501515151600181111561060d5761060d611225565b14156107755760208085015151015180825260a083015190516106329110600d610a38565b805151610642903414600e610a38565b6060820151602082810180516001600160a01b03938416905260a0850151815183015251604080518251909416845290820151918301919091527f40294819dfbc85cd8ac646cea8d90b000b78842b47cfe50e9f19416e4d825265910160405180910390a16020810151835260808201511561072b576106c0610ed9565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015281830180513390528051600093019290925283515182519091015280514360609091015260c084015190516080015261072581610ac9565b506104cb565b81606001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f1935050505015801561076c573d6000803e3d6000fd5b506106c0610ed9565b600160208501515151600181111561078f5761078f611225565b14156104cb576107a13415600f610a38565b6020808301516040516001600160a01b0390911681527f2755689f2b4ab94cac785fee6c0cb490ab259ec70b28055bcd7fd6ea6502f786910160405180910390a16020808301516001600160a01b0316908401526107fd610ed9565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518386018051919095169052608080880151855190151594019390935260a087015184519092019190915282514391015260c08501519151015261072581610ac9565b6108806005600054146015610a38565b815161089b90158061089457508251600154145b6016610a38565b6000808055600280546108ad906112e0565b80601f01602080910402602001604051908101604052809291908181526020018280546108d9906112e0565b80156109265780601f106108fb57610100808354040283529160200191610926565b820191906000526020600020905b81548152906001019060200180831161090957829003601f168201915b505050505080602001905181019061093e91906113bb565b905061095281604001514310156017610a38565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a16109a534156013610a38565b80516109bd906001600160a01b031633146014610a38565b6109c5610ed9565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518386018051919095169052608080870151855190151594019390935260a086015184519092019190915282514391015260c0840151915101526104cb81610ac9565b8161018e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610a6c83853085610c95565b90505b9392505050565b600082610a8383826114cf565b9150811015610ac35760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610a55565b92915050565b80516040015160208201516080015111610bf8576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b0390811680835283516020908101518316818501908152855160409081015181870190815283880180515187166060808a01918252825187015115156080808c01918252845187015160a0808e01918252955184015160c0808f0191825260056000554360015589519b8c019c909c5298518c16978a01979097529451918801919091529051909716918501919091529451151594830194909452925191810191909152905160e08201526101000160405160208183030381529060405260029080519060200190610bf3929190610f62565b505050565b610c148160000151602001518260200151600001516001610d6f565b80602001516020015115610c3b5760008080556001819055610c3890600290610fe6565b50565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c7e573d6000803e3d6000fd5b5060008080556001819055610c3890600290610fe6565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610cfc916114f5565b60006040518083038185875af1925050503d8060008114610d39576040519150601f19603f3d011682016040523d82523d6000602084013e610d3e565b606091505b5091509150610d4f82826001610d83565b5080806020019051810190610d649190611511565b979650505050505050565b610d7a838383610dbe565b610bf357600080fd5b60608315610d92575081610a6f565b825115610da25782518084602001fd5b60405163100960cb60e01b815260048101839052602401610a55565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610e1d916114f5565b60006040518083038185875af1925050503d8060008114610e5a576040519150601f19603f3d011682016040523d82523d6000602084013e610e5f565b606091505b5091509150610e7082826002610d83565b5080806020019051810190610e859190611511565b9695505050505050565b60408051608081018252600091810182815260608201929092529081905b8152600060209091015290565b604051806040016040528060008152602001610ed4611020565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b6040805160608101825260009181019182529081908152602001610ed4604080518082019091526000808252602082015290565b828054610f6e906112e0565b90600052602060002090601f016020900481019282610f905760008555610fd6565b82601f10610fa957805160ff1916838001178555610fd6565b82800160010185558215610fd6579182015b82811115610fd6578251825591602001919060010190610fbb565b50610fe2929150611033565b5090565b508054610ff2906112e0565b6000825580601f10611002575050565b601f016020900490600052602060002090810190610c389190611033565b6040518060200160405280610ed4611048565b5b80821115610fe25760008155600101611034565b60408051606081019091528060008152602001610ead6040518060200160405280600081525090565b60006040828403121561108357600080fd5b50919050565b60006080828403121561108357600080fd5b60005b838110156110b657818101518382015260200161109e565b838111156104cb5750506000910152565b82815260406020820152600082518060408401526110ec81606085016020870161109b565b601f01601f1916919091016060019392505050565b60006020828403121561111357600080fd5b5035919050565b6040805190810167ffffffffffffffff8111828210171561114b57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561114b57634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561114b57634e487b7160e01b600052604160045260246000fd5b8015158114610c3857600080fd5b6000604082840312156111d357600080fd5b6040516040810181811067ffffffffffffffff8211171561120457634e487b7160e01b600052604160045260246000fd5b604052823581526020830135611219816111b3565b60208201529392505050565b634e487b7160e01b600052602160045260246000fd5b6000818303608081121561124e57600080fd5b61125661111a565b833581526060601f198301121561126c57600080fd5b611274611151565b61127c611182565b60208601356002811061128e57600080fd5b81526020603f19850112156112a257600080fd5b6112aa611151565b604087013581526020820152606086013593506112c6846111b3565b604081019390935291825260208101919091529392505050565b600181811c908216806112f457607f821691505b6020821081141561108357634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461132c57600080fd5b919050565b600060a0828403121561134357600080fd5b60405160a0810181811067ffffffffffffffff8211171561137457634e487b7160e01b600052604160045260246000fd5b60405261138083611315565b815261138e60208401611315565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b600060e082840312156113cd57600080fd5b60405160e0810181811067ffffffffffffffff821117156113fe57634e487b7160e01b600052604160045260246000fd5b60405261140a83611315565b815261141860208401611315565b60208201526040830151604082015261143360608401611315565b60608201526080830151611446816111b3565b608082015260a0838101519082015260c0928301519281019290925250919050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190600281106114a957634e487b7160e01b600052602160045260246000fd5b806040850152506020810151516060840152604081015115156080840152509392505050565b600082198211156114f057634e487b7160e01b600052601160045260246000fd5b500190565b6000825161150781846020870161109b565b9190910192915050565b60006020828403121561152357600080fd5b8151610a6f816111b356fea26469706673582212204db9592ba1eea6a37b375523ae58e463e636b00192177293cceb5de5d110b06e64736f6c634300080c0033`,
  BytecodeLen: 6376,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:75:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:75:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:40:20:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder_bid": Bidder_bid,
  "Bidder_optIn": Bidder_optIn,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid,
    optIn: Bidder_optIn
    }
  };
