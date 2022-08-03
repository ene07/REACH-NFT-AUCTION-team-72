// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

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
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v293, v294, v324, v325, v326, v327, v328] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v350 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:40:29:application call to [unknown function] (defined at: ./index.rsh:40:29:function exp)', 'at ./index.rsh:40:29:application call to [unknown function] (defined at: ./index.rsh:40:29:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v351 = v350[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v353 = stdlib.gt(v351, v327);
  stdlib.assert(v353, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:13:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:29:application call to [unknown function] (defined at: ./index.rsh:40:29:function exp)', 'at ./index.rsh:40:29:application call to [unknown function] (defined at: ./index.rsh:40:29:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v293, v294, v324, v325, v326, v327, v328, v350],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v351, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v362], secs: v364, time: v363, didSend: v165, from: v361 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v366 = v362[stdlib.checkedBigNumberify('./index.rsh:40:10:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v366,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v375 = [v325, v327];
      const v376 = await txn1.getOutput('Bidder_bid', 'v375', ctc5, v375);
      
      if (v326) {
        const v634 = v361;
        const v635 = false;
        const v636 = v366;
        const v637 = v363;
        const v639 = stdlib.le(v328, v324);
        if (v639) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v361,
            tok: v294
            });
          sim_r.txns.push({
            kind: 'from',
            to: v293,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v294
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
          to: v325,
          tok: undefined /* Nothing */
          });
        const v640 = v361;
        const v641 = false;
        const v642 = v366;
        const v643 = v363;
        const v645 = stdlib.le(v328, v324);
        if (v645) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v361,
            tok: v294
            });
          sim_r.txns.push({
            kind: 'from',
            to: v293,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v294
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v362], secs: v364, time: v363, didSend: v165, from: v361 } = txn1;
  undefined /* setApiDetails */;
  const v366 = v362[stdlib.checkedBigNumberify('./index.rsh:40:10:spread', stdlib.UInt_max, '0')];
  const v367 = stdlib.gt(v366, v327);
  stdlib.assert(v367, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:41:13:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:29:application call to [unknown function] (defined at: ./index.rsh:40:29:function exp)', 'at ./index.rsh:40:29:application call to [unknown function] (defined at: ./index.rsh:40:29:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v375 = [v325, v327];
  const v376 = await txn1.getOutput('Bidder_bid', 'v375', ctc5, v375);
  if (v165) {
    stdlib.protect(ctc6, await interact.out(v362, v376), {
      at: './index.rsh:40:11:application',
      fs: ['at ./index.rsh:40:11:application call to [unknown function] (defined at: ./index.rsh:40:11:function exp)', 'at ./index.rsh:43:15:application call to "notify" (defined at: ./index.rsh:42:27:function exp)', 'at ./index.rsh:42:27:application call to [unknown function] (defined at: ./index.rsh:42:27:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v326) {
    const v634 = v361;
    const v635 = false;
    const v636 = v366;
    const v637 = v363;
    const v639 = stdlib.le(v328, v324);
    if (v639) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v640 = v361;
    const v641 = false;
    const v642 = v366;
    const v643 = v363;
    const v645 = stdlib.le(v328, v324);
    if (v645) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
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
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc0]);
  const ctc7 = stdlib.T_Bool;
  
  
  const v286 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:22:65:application',
    fs: ['at ./index.rsh:21:15:application call to [unknown function] (defined at: ./index.rsh:21:18:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v287 = v286.lenInBlock;
  const v288 = v286.minBid;
  const v289 = v286.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v289, v288, v287],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v294, v295, v296], secs: v298, time: v297, didSend: v35, from: v293 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v294
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
  const {data: [v294, v295, v296], secs: v298, time: v297, didSend: v35, from: v293 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v293, v294, v295, v296, v297],
    evt_cnt: 0,
    funcNum: 1,
    lct: v297,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:27:14:decimal', stdlib.UInt_max, '1'), v294]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v308, time: v307, didSend: v42, from: v306 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:27:14:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v294
        });
      
      const v324 = stdlib.add(v297, v296);
      const v325 = v293;
      const v326 = true;
      const v327 = v295;
      const v328 = v307;
      const v329 = v297;
      
      if (await (async () => {
        const v343 = stdlib.le(v329, v324);
        
        return v343;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v325,
          tok: v294
          });
        if (v326) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v294
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
            to: v293,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v294
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
    tys: [ctc5, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v308, time: v307, didSend: v42, from: v306 } = txn2;
  ;
  ;
  const v318 = stdlib.addressEq(v293, v306);
  stdlib.assert(v318, {
    at: './index.rsh:29:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.auctionReady(), {
    at: './index.rsh:30:32:application',
    fs: ['at ./index.rsh:30:32:application call to [unknown function] (defined at: ./index.rsh:30:32:function exp)', 'at ./index.rsh:30:32:application call to "liftedInteract" (defined at: ./index.rsh:30:32:application)'],
    msg: 'auctionReady',
    who: 'Creator'
    });
  
  const v324 = stdlib.add(v297, v296);
  let v325 = v293;
  let v326 = true;
  let v327 = v295;
  let v328 = v307;
  let v329 = v297;
  
  while (await (async () => {
    const v343 = stdlib.le(v329, v324);
    
    return v343;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v324],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v293, v294, v324, v325, v326, v327, v328],
        evt_cnt: 0,
        funcNum: 4,
        lct: v328,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:53:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v395, time: v394, didSend: v221, from: v393 } = txn4;
          
          ;
          const cv325 = v325;
          const cv326 = v326;
          const cv327 = v327;
          const cv328 = v394;
          const cv329 = v328;
          
          await (async () => {
            const v325 = cv325;
            const v326 = cv326;
            const v327 = cv327;
            const v328 = cv328;
            const v329 = cv329;
            
            if (await (async () => {
              const v343 = stdlib.le(v329, v324);
              
              return v343;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v325,
                tok: v294
                });
              if (v326) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v294
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
                  to: v293,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v294
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
        tys: [ctc5, ctc1, ctc0, ctc5, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v395, time: v394, didSend: v221, from: v393 } = txn4;
      ;
      const v396 = stdlib.addressEq(v293, v393);
      stdlib.assert(v396, {
        at: './index.rsh:53:17:dot',
        fs: ['at ./index.rsh:52:36:application call to [unknown function] (defined at: ./index.rsh:52:36:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv325 = v325;
      const cv326 = v326;
      const cv327 = v327;
      const cv328 = v394;
      const cv329 = v328;
      
      v325 = cv325;
      v326 = cv326;
      v327 = cv327;
      v328 = cv328;
      v329 = cv329;
      
      continue;
      }
    else {
      const {data: [v362], secs: v364, time: v363, didSend: v165, from: v361 } = txn3;
      undefined /* setApiDetails */;
      const v366 = v362[stdlib.checkedBigNumberify('./index.rsh:40:10:spread', stdlib.UInt_max, '0')];
      const v367 = stdlib.gt(v366, v327);
      stdlib.assert(v367, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:41:13:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:40:29:application call to [unknown function] (defined at: ./index.rsh:40:29:function exp)', 'at ./index.rsh:40:29:application call to [unknown function] (defined at: ./index.rsh:40:29:function exp)'],
        msg: 'bid is too low',
        who: 'Creator'
        });
      ;
      const v375 = [v325, v327];
      await txn3.getOutput('Bidder_bid', 'v375', ctc6, v375);
      if (v326) {
        stdlib.protect(ctc3, await interact.showBid(v361, v366), {
          at: './index.rsh:48:33:application',
          fs: ['at ./index.rsh:48:33:application call to [unknown function] (defined at: ./index.rsh:48:33:function exp)', 'at ./index.rsh:48:33:application call to "liftedInteract" (defined at: ./index.rsh:48:33:application)', 'at ./index.rsh:42:27:application call to [unknown function] (defined at: ./index.rsh:42:27:function exp)'],
          msg: 'showBid',
          who: 'Creator'
          });
        
        const cv325 = v361;
        const cv326 = false;
        const cv327 = v366;
        const cv328 = v363;
        const cv329 = v328;
        
        v325 = cv325;
        v326 = cv326;
        v327 = cv327;
        v328 = cv328;
        v329 = cv329;
        
        continue;}
      else {
        ;
        stdlib.protect(ctc3, await interact.showBid(v361, v366), {
          at: './index.rsh:48:33:application',
          fs: ['at ./index.rsh:48:33:application call to [unknown function] (defined at: ./index.rsh:48:33:function exp)', 'at ./index.rsh:48:33:application call to "liftedInteract" (defined at: ./index.rsh:48:33:application)', 'at ./index.rsh:42:27:application call to [unknown function] (defined at: ./index.rsh:42:27:function exp)'],
          msg: 'showBid',
          who: 'Creator'
          });
        
        const cv325 = v361;
        const cv326 = false;
        const cv327 = v366;
        const cv328 = v363;
        const cv329 = v328;
        
        v325 = cv325;
        v326 = cv326;
        v327 = cv327;
        v328 = cv328;
        v329 = cv329;
        
        continue;}}
    
    }
  ;
  if (v326) {
    stdlib.protect(ctc3, await interact.showOutcome(v325, v327), {
      at: './index.rsh:61:33:application',
      fs: ['at ./index.rsh:61:33:application call to [unknown function] (defined at: ./index.rsh:61:33:function exp)', 'at ./index.rsh:61:33:application call to "liftedInteract" (defined at: ./index.rsh:61:33:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc3, await interact.showOutcome(v325, v327), {
      at: './index.rsh:61:33:application',
      fs: ['at ./index.rsh:61:33:application call to [unknown function] (defined at: ./index.rsh:61:33:function exp)', 'at ./index.rsh:61:33:application call to "liftedInteract" (defined at: ./index.rsh:61:33:application)'],
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
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`]
    },
  appApproval: `BiAKAAEEBSggCFFZoI0GJgIBAAAiNQAxGEEDEylkSSJbNQEhBls1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCAHQ2GgIXNQQ2GgM2GgEXSYEDDEABEUkkDEAAWSQSRCU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+gASRJzTzsDIGNP4PRDT/MQASRDT/NAMhBVs0/jQDVzAgNANXUAEXNAMhB1syBjQDIQhbQgGHSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQVbNf4hBFs1/VcwIDX8IQdbNfshCFs1+kk1BTX5gATXkLTdNPlQsDIGNP0MRDT5F0k1+DT7DUQ0+IgCO4AIAAAAAAAAAXc0/DT7FlBQsDT8NPsWUDUHNANXUAEXQQASNP80/jT9MQAiNPgyBjT6QgD3sSKyATT7sggjshA0/LIHszT/NP40/TEAIjT4MgY0+kIA1UkjDEAAVyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/oE4WzX9gASai5F0sCM0/ogBwDT/MQASRDT/NP40/TQDgTBbCDT/IzQDIQRbMgY0/UIAeEghCYgBgSI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBls1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJiAFGsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQMgYWUChLAVcAQGdIIzUBMgY1AkIAvTX/Nf41/TX8Nfs1+jX5Nfg0/zT6DkEALjT4NPkWUDT6FlA0+1A0/BZRBwhQNP0WUDT+FlAoSwFXAGFnSCU1ATIGNQJCAHexIrIBI7ISJLIQNPuyFDT5shGzNPxBABqxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAKrEisgE0/bIII7IQNPiyB7OxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
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
                "name": "v294",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v296",
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
                "name": "v294",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v295",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v296",
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
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v362",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v375",
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
        "internalType": "struct T9",
        "name": "",
        "type": "tuple"
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
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v362",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
  Bytecode: `0x60806040526040516200164f3803806200164f83398101604081905262000026916200028b565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000184565b620000e36040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825293518401516060808901918252436080808b0182815260016000819055929092558751808a019a909a5294519095168887015291519187019190915251908501525160a0808501919091528151808503909101815260c0909301905281516200017b926002920190620001ae565b50505062000374565b81620001aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001bc9062000337565b90600052602060002090601f016020900481019282620001e057600085556200022b565b82601f10620001fb57805160ff19168380011785556200022b565b828001600101855582156200022b579182015b828111156200022b5782518255916020019190600101906200020e565b50620002399291506200023d565b5090565b5b808211156200023957600081556001016200023e565b604051606081016001600160401b03811182821017156200028557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029f57600080fd5b604080519081016001600160401b0381118282101715620002d057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ea57600080fd5b620002f462000254565b60208501519092506001600160a01b03811681146200031257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200034c57607f821691505b602082108114156200036e57634e487b7160e01b600052602260045260246000fd5b50919050565b6112cb80620003846000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063a7661d54146100d6578063ab53f2c6146100e9578063b62792241461010c57005b80631e93b0f1146100775780632772eddc1461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610f0e565b610143565b6100756100bc366004610f0e565b610179565b3480156100cd57600080fd5b50600154610088565b6100756100e4366004610f0e565b6101ab565b3480156100f557600080fd5b506100fe6101dd565b604051610092929190610f56565b61011f61011a366004610f90565b61027a565b6040805182516001600160a01b031681526020928301519281019290925201610092565b604080516060810182526000602082018181529282015290815261017561016f36849003840184611011565b826102d1565b5050565b60408051606081018252600060208201818152928201529081526101756101a536849003840184611076565b826105f1565b60408051606081018252600060208201818152928201529081526101756101d736849003840184611076565b826107d4565b6000606060005460028080546101f2906110ae565b80601f016020809104026020016040519081016040528092919081815260200182805461021e906110ae565b801561026b5780601f106102405761010080835404028352916020019161026b565b820191906000526020600020905b81548152906001019060200180831161024e57829003601f168201915b50505050509050915091509091565b6040805180820190915260008082526020820152610296610da5565b6020810151518390526102bf604080516060810182526000602082018181529282015290815290565b6102c982826102d1565b519392505050565b6102e1600560005414600f61099c565b81516102fc9015806102f557508251600154145b601061099c565b60008080556002805461030e906110ae565b80601f016020809104026020016040519081016040528092919081815260200182805461033a906110ae565b80156103875780601f1061035c57610100808354040283529160200191610387565b820191906000526020600020905b81548152906001019060200180831161036a57829003601f168201915b505050505080602001905181019061039f91906110ff565b90506103c1604080516060810182526000602082018181529282015290815290565b6103d282604001514310601161099c565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a160a0820151602085015151516104319110600d61099c565b60208401515151610445903414600e61099c565b606082015181516001600160a01b03909116905260a082015181516020015280516040517fcd4a18dae81c5c5ddb02bd148814e4f161a94e95b432b4889580e547c1994e28916104af9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a180518352608082015115610539576104cd610dd2565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c0840151905160800152610533816109c2565b506105eb565b81606001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f1935050505015801561057a573d6000803e3d6000fd5b50610583610dd2565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c08401519051608001526105e9816109c2565b505b50505050565b610601600160005414600b61099c565b815161061c90158061061557508251600154145b600c61099c565b60008080556002805461062e906110ae565b80601f016020809104026020016040519081016040528092919081815260200182805461065a906110ae565b80156106a75780601f1061067c576101008083540402835291602001916106a7565b820191906000526020600020905b81548152906001019060200180831161068a57829003601f168201915b50505050508060200190518101906106bf91906111ac565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16107163415600861099c565b6107306107293383602001516001610b8e565b600961099c565b8051610748906001600160a01b03163314600a61099c565b610750610dd2565b815181516001600160a01b03918216905260208084015183519216910152606082015160808301516107829190611236565b81516040908101919091528251602080840180516001600160a01b039093169092528151600191015283820151815190920191909152805143606090910152608080840151915101526105eb816109c2565b6107e4600560005414601461099c565b81516107ff9015806107f857508251600154145b601561099c565b600080805560028054610811906110ae565b80601f016020809104026020016040519081016040528092919081815260200182805461083d906110ae565b801561088a5780601f1061085f5761010080835404028352916020019161088a565b820191906000526020600020905b81548152906001019060200180831161086d57829003601f168201915b50505050508060200190518101906108a291906110ff565b90506108b68160400151431015601661099c565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a16109093415601261099c565b8051610921906001600160a01b03163314601361099c565b610929610dd2565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518386018051919095169052608080870151855190151594019390935260a086015184519092019190915282514391015260c0840151915101526105eb816109c2565b816101755760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b80516040015160208201516080015111610af1576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b0390811680835283516020908101518316818501908152855160409081015181870190815283880180515187166060808a01918252825187015115156080808c01918252845187015160a0808e01918252955184015160c0808f0191825260056000554360015589519b8c019c909c5298518c16978a01979097529451918801919091529051909716918501919091529451151594830194909452925191810191909152905160e08201526101000160405160208183030381529060405260029080519060200190610aec929190610e27565b505050565b610b0d8160000151602001518260200151600001516001610ba6565b80602001516020015115610b345760008080556001819055610b3190600290610eab565b50565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b77573d6000803e3d6000fd5b5060008080556001819055610b3190600290610eab565b6000610b9c83853085610bba565b90505b9392505050565b610bb1838383610c94565b610aec57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610c219161125c565b60006040518083038185875af1925050503d8060008114610c5e576040519150601f19603f3d011682016040523d82523d6000602084013e610c63565b606091505b5091509150610c7482826001610d65565b5080806020019051810190610c899190611278565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610cf39161125c565b60006040518083038185875af1925050503d8060008114610d30576040519150601f19603f3d011682016040523d82523d6000602084013e610d35565b606091505b5091509150610d4682826002610d65565b5080806020019051810190610d5b9190611278565b9695505050505050565b60608315610d74575081610b9f565b825115610d845782518084602001fd5b60405163100960cb60e01b8152600481018390526024016109b9565b905290565b604051806040016040528060008152602001610da060408051808201909152600060208201908152815290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b828054610e33906110ae565b90600052602060002090601f016020900481019282610e555760008555610e9b565b82601f10610e6e57805160ff1916838001178555610e9b565b82800160010185558215610e9b579182015b82811115610e9b578251825591602001919060010190610e80565b50610ea7929150610ee1565b5090565b508054610eb7906110ae565b6000825580601f10610ec7575050565b601f016020900490600052602060002090810190610b3191905b5b80821115610ea75760008155600101610ee2565b600060408284031215610f0857600080fd5b50919050565b600060408284031215610f2057600080fd5b610b9f8383610ef6565b60005b83811015610f45578181015183820152602001610f2d565b838111156105eb5750506000910152565b8281526040602082015260008251806040840152610f7b816060850160208701610f2a565b601f01601f1916919091016060019392505050565b600060208284031215610fa257600080fd5b5035919050565b6040805190810167ffffffffffffffff81118282101715610fda57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610fda57634e487b7160e01b600052604160045260246000fd5b6000818303604081121561102457600080fd5b61102c610fa9565b833581526020601f198301121561104257600080fd5b61104a610fe0565b9150611054610fe0565b602094850135815282529283015250919050565b8015158114610b3157600080fd5b60006040828403121561108857600080fd5b611090610fa9565b8235815260208301356110a281611068565b60208201529392505050565b600181811c908216806110c257607f821691505b60208210811415610f0857634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146110fa57600080fd5b919050565b600060e0828403121561111157600080fd5b60405160e0810181811067ffffffffffffffff8211171561114257634e487b7160e01b600052604160045260246000fd5b60405261114e836110e3565b815261115c602084016110e3565b602082015260408301516040820152611177606084016110e3565b6060820152608083015161118a81611068565b608082015260a0838101519082015260c0928301519281019290925250919050565b600060a082840312156111be57600080fd5b60405160a0810181811067ffffffffffffffff821117156111ef57634e487b7160e01b600052604160045260246000fd5b6040526111fb836110e3565b8152611209602084016110e3565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6000821982111561125757634e487b7160e01b600052601160045260246000fd5b500190565b6000825161126e818460208701610f2a565b9190910192915050565b60006020828403121561128a57600080fd5b8151610b9f8161106856fea264697066735822122047816c7f24f5d35e6f5a05925277b2bebf9be3601d605cdd9a1f324c5c9b976464736f6c634300080c0033`,
  BytecodeLen: 5711,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:62:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:62:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:36:20:after expr stmt semicolon',
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
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
