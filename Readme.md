# Detailed workshop walkthrough: Reach NFT AUCTION

The Reach NFT auction is a web3 project developed as part of Umoja3 Decentralzed Bounty hack. This workshop is a detailed walkthrough of the application.

We built it substantially on concepts from the Reach programming Language tutorial and previous workshop examples. This workshop assumes you have completed previous **[tutorials and/or workshops](https://docs.reach.sh/tut/rps/#tut-2)**. Follow **[this tutorial](https://docs.reach.sh/tut/rps/#tut)** to set up Reach environment. 

## What to expect

1. Description
2. Stack requirements
3. Software Requirements
4. Getting Started
    - Installation and setup
    - Problem Analysis
    - Data Definition
    - Communication construction
    - Assertion Insertion
    - Possible additions
    - Interaction Introduction

---------------

## Description

The program applies the FIRST-PRICED SEALED AUCTION/ENGLISH AUCTION mechanism.

A first-price sealed-bid auction (FPSBA) is a common type of auction. It is also known as blind auction. In this type of auction, all bidders simultaneously submit sealed bids so that none of them is aware of bids the bids of other participant. The highest bidder pays the price that was submitted and claim the merchadise.


## Stack requirements

- Reach Language - **[Reach docs](https://docs.reach.sh/tut/rps/#tut-1)**
- Javascript Programming Language

## Software Requirements

- Linux OS (Ubuntu) or  Windows 10 OS installed with version 2004 or higher
- Docker and Docker Compose
- Docker Desktop(optional)
- Make

## Getting Started

### Installation and setup


For proper installation, please refer to the **[Reach documentation](https://docs.reach.sh/tut/rps/#tut)**.  

To verify all  tools are correctly installed, you should be able to run the following commands successfully.

```
   $ make --version

   $ docker --version

   $ docker-compose --version

```

To get started, sync with us by creating a new project directory named ~/reach/workshop-nft-auction:

```
  $ mkdir -p ~/reach/workshop-nft-auction

  $ cd ~/reach/workshop-nft-auction

```
To download the latest version of Reach, use command below:

```
  $ curl https://docs.reach.sh/reach -o ../reach ; chmod +x ../reach

```

To Verify if Reach is properly installed in your machine, run:

```
    ../reach version

```

This should return the version of Reach you have just installed, In our case:

```
   reach 1.1.7

```

Bootstrap a new Reach project, run:

```
    $.../reach init
    
```
Output: 

```
    Writing index.rsh...
    Writing index.mjs...
    Done.

```

### What just happened!

Two files are created , an `index.rsh` file which is the file where our backend code will be written, and an `index.mjs` file where our frontend code will reside. If you open these files, you will see the scaffolding structure for reach that Reach Init has created for us.


Now, let's run our application. Run the following command;

```
 $ REACH_CONNECTOR_MODE=ALGO ../reach run

```

Output:

```
  Hello, Alice and Bob!
  Launching...
  Starting backends...
  Goodbye, Alice and Bob!
```

### Problem Analysis

 This defines the general scope of the issue, how we intend to solve the problem with our application and includes an analysis of the set of participants involved in the process.

Problem Analysis is done first before the actual implemetation. This analysis depends on the objective of our project which is: a Auctioneer create a NFT item for bidding with  deadline for which bids are to be placed. And Bidders place their bids.

Try to write down your own answers in your Reach backend program(index.rsh) using comments block. You may use the following guiding questions:


 ```
     Who is involved in this application?

     What information do they know at the start of the program?

     What actions can 'who' perform in this application?

 ```
 
Stop! Write down the problem analysis of this program as a comment.

Compare your answers with the answers below:

```
  
    The program involves two participants or roles: a Auctioneer who create and deploy the NFT contract and the Bidder who places their bids.

    The Auctioneer stipulate  props for NFT Items but set no initial or mininum bid at the start of the bidding  period as well as deadline for the bidding.

    The Bidders are aware of the props for each NFT item as the application start such as NFT ID and deadline for voting.

    Each Bidder places their bids blindly, which is paid into the contract and are added to a map or list of bidders

    The Auctioneer goes through the map or list of bidders and make a pick i.e the highest bidder.

    The bid of the highest bidder is transferred to the Auctioneer while those of other bidders are transferred back to them.
    
    The Auctioneer transfers the nft item to the highest bidder.

```


 Your answers may different from what is here. If you are confident your answers are correct you can proceed with this workshop.


 ### Data Definition

At this point, we would focus on going through definition of data types equivalents of the values we used in our answers from the previous section.

For this program, we should decide:

 a. What data type will represent the NFT id ?
 b. What data type will represent the deadline etc?


Also, we'll be deciding what functions our participants will have. Examples:

 a. What function (s)  does the Auctioneer  needs to start the auction process?
 b.  What function (s) does a Bidder  need to place their bids?


 
You should look back at your problem analysis to do this step. Whenever a participant starts off knowing something, then it is a field in the interact object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.

Write down the data definitions for this program as definitions.


```rsh
    const AuctioneerInteract = {
    ...hasRandom,
    getAuctionProps: Fun([], Object({
        nftId: Token,
        deadline:UInt,
    })),
    getBids: Fun([], Null),
    showTimeout:Fun([],Null),
    winnerReady:Fun([],Null),
    seeBid: Fun([Address, UInt], Null),
    seeWinner: Fun([Address, UInt], Null),
    claimTimeout:Fun([],Null)
    }


    
    const Auctioneer= Participant('Auctioneer',  AuctioneerInteract);


    const Buyer= API('Buyer', {
        // Specify Bob's interact interface here
        submitBid:Fun([UInt],Bool),
        claimItem:Fun([],Bool),
        optIn: Fun([], Token),
        showHighestBidder:Fun([],Tuple(Address,UInt))
    });

    const vNFT = View('NFT', {
        owner: Address });


```

We are going to represent the data defintion as; 

- nftId as Token,

- deadline as UInt, 

- getAuctionProps function as `Fun([],Object({ nftId: Token,deadline:UInt }))`, that takes nothing and return an object of props. 

-  getBids as `Fun([],Null)`, that takes nothing and return nothing and is used to get the bids from the frontend thus start the bidding process;

- showTimeout as `Fun([],Null)`, that takes no argument and  returns nothing.This function informs the of a timeout.


- winnerReady as `Fun([],Null)`, that takes no argument and returns nothing. This function initiate the period of   claim i.e each bid checks if they hold claim to the NFT item.

- seeBid as `Fun([Address, UInt], Null)`, that takes two argument but returns nothing. which is used to show all bids to the Auctioneer.

- seeWinner as `Fun([Address, UInt], Null)`, shows the winner or highest bidder to the Auctioneer

- claimTimeout as `Fun([],Null)` ,informs the Auctioneer of timeout for the claiming period.

- submitBid as `Fun([UInt],Bool)`, use to place or submit bids of bidder and enter each into a list or map.

- claimItem as `Fun([],Bool)`, use to check for claim on the nft item by a bidder.

- optIn as `Fun([], Token)` ,use to allow bidder opt for the nft item.

- showHighestBidder: `Fun([],Tuple(Address,UInt))` ,shows the winner or highest bidder to each bidder.


### Communication construction

An important aspect of a web3 application is the pattern of communication and transfer among the participants, including the consensus network.Try to write this part considering how the process of Auctioneer creating a NFT item and how the bidders will place their bids.

Write down the structure for this program as comments.

```
    The Auctioneer create  the props of a NFT item i.e NFT id and deadline.

    The Auctioneer  wait for all the Bidders to place thier bids
 
    Each Bidder are given a period to place their bids and are then added to a list or map.

    The Auctioneer goes through the list or map then make his pick i.e highest bidder .

    Each Bidder checks the contract for claim on the NFT item..

    Bid of highest bidder is transferred to the Auctioneer while other bidders receive back their bids

    The Auctioneer and Bidders are informed of who the highest bidder is and amount bidded.

    The Auctioneer transfers the NFT item to the account of the winner 

```

Write down the communication pattern for this program as code.

Main logic of our contract should now look like:

```rsh
  
        Auctioneer.only(() => {
            const { nftId, deadline} = declassify(interact.getAuctionProps());
        })

        Auctioneer.publish( nftId, deadline);
        vNFT.owner.set(Auctioneer); 
        const supply = 1;
        commit();

        Auctioneer.pay([[supply , nftId]]);
        assert(balance(nftId) == supply, "balance of NFT is wrong");
        Auctioneer.interact.getBids();

        
        const buyersMap = new Map(Address, UInt);
        const buyersSet= new Set();
        //const [ timeRemaining, keepGoing ] = makeDeadline(deadline);
        const close= lastConsensusTime() + deadline
        const [numOfBuyer] =
        parallelReduce([0])
            .invariant(balance(nftId) == supply)
            .while(lastConsensusTime() <= close)
            .api_(Buyer.optIn, () => {      
                return [0, (k) => {
                k(nftId);
                
                return [numOfBuyer];
                }];
            })
            .api_(Buyer.submitBid, (bid) => {
                check(!buyersSet.member(this),"You already submitted your bid")
                return [bid, (k) => {
                    k(true)
                    buyersMap[this] = bid
                    buyersSet.insert(this);
                    Auctioneer.interact.seeBid(this,bid)
                    return[numOfBuyer+1]
                }]

            })
            .timeout(absoluteTime(close), () => {
                Anybody.publish();
                Auctioneer.interact.showTimeout()
                return[numOfBuyer]
            });

            Auctioneer.interact.winnerReady();
            const end= lastConsensusTime() + deadline
            const [lastBid,who,count] =
            parallelReduce([0,Auctioneer,0])
            .invariant(balance(nftId) == supply)
            //.invariant(buyersSet.Map.size() == numOfBuyer)
            //.while(count <=numOfBuyer)
            .while(lastConsensusTime() <= end)
            .api_(Buyer.claimItem, () => {
                check(buyersSet.member(this),"You are not eligible to claim item")
                return [0, (k) => {
                    const bid = fromSome(buyersMap[this],0)
                    //check(bid > highestBid, "bid is too low");

                    const address = bid > lastBid ? this : Auctioneer
                    const highestbid =bid >lastBid? bid :lastBid
                    if(balance() >= bid){
                    transfer(bid).to(this)
                    }
                    // transfer(bid).to(this)
                    const value=bid >lastBid ?true :false
                    k(value)

                    
                    return[highestbid,address,count+1]
                }]

            })
            .timeout(absoluteTime(end), () => {
                Anybody.publish();
                Auctioneer.interact.claimTimeout()
                return[lastBid,who,count]
            });
            transfer(supply, nftId).to(who);
            transfer(balance()).to(Auctioneer)
            commit()

```

The auction is started without a starting bid price.Each bidder submit bids simultaneously without knowing each other's bid(blindly) then the Auctioneer goes through  d bids and make his pick(highest bid)
The winner is given a window to claim is nft item , when the time passes without a claim, the NFT item is transferred back to the Actioneer.


 ### Assertion insertion and checks

 Our  assertion takes into the account that the balance of NFT item in our contract is same as the number minted.
 
 ```
    assert(balance(nftId) == supply, "balance of NFT is wrong")
 ```

 Our code has some number of checks in it to ensure our application runs correctlyy as intended

 ```
  check(!buyersSet.member(this),"You already submitted your bid")
 ```
 
 The check above ensure bidders are not placing bids more than once

 ````
   check(buyersSet.member(this),"You are not eligible to claim item")

 ```

 The above check ,ensures bidder trying to claim the NFT item are valid members of the list or map.


 ### Possible code additions

 An improvement to our code base  is to enforce a way to show winner and their bids to all our voters. For that, we will define a function thus:

 ``` 
     const [ [], k ] = call(Buyer.showHighestBidder);
         k([who,lastBid]);

 ```

###  Interaction Introduction

Our contract is complete and functional, we can then write the frontend.

Since we'll be interacting with an API to allow bidding, using a web frontend library is a better choice. In our case it will be React.

Stop! Insert interact calls to the frontend into the program.

```




```


