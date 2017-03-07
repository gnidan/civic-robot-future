// Import React
import React from "react";

import CodeSlide from 'spectacle-code-slide';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Code,
  CodePane,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Particles from 'react-particles-js';
import FontAwesome from 'react-fontawesome';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  geo: require("../assets/geolocalization.svg"),
  contract: require("../assets/contract.svg"),
  floppy: require("../assets/floppy-disk.svg"),
  browser: require("../assets/browser-5.svg"),
  recycle: require("../assets/recycle.svg"),
  wine: require("../assets/wine.svg"),
  trash: require("../assets/trash.svg"),
  rightArrow: require("../assets/right-arrow.svg"),
  money: require("../assets/money.svg"),
  phone: require("../assets/cellular-phone.svg"),
  industrial: require("../assets/industrial.svg"),
  conveyer: require("../assets/conveyer.svg"),
  tree: require("../assets/tree.svg"),
  tree2: require("../assets/tree-2.svg"),
  chains: require("../assets/chains.svg"),
  robot: require("../assets/robot.svg"),
};

preloader(images);

const theme = createTheme({
  primary: "#53195f",
  secondary: "#ff7a00",
  tertiary: "#32636f",
  // tertiary: "rgb(67, 229, 255)",
  quartenary: "rgb(67, 229, 255)"
  // quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica",
});

export default class Presentation extends React.Component {
  render() {
    let particlesStyle = {
      height: "100%",
      left: 0,
      position: "fixed",
      top: 0,
      width: "100%"
    };

          /* <Particles
          //   params={{
          //       particles: {
          //           number: {
          //               value: 50
          //           },
          //           line_linked: {
          //               shadow: {
          //                   enable: false,
          //                   color: "#cecece",
          //                   blur: 5
          //               }
          //           }
          //       }
          //   }}/>*/
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={0} theme={theme}
            progress="bar">

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.geo} width="5em" height="5em" />
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Smart Contracts for a Civic Robot Future
          </Heading>
          <br />
          <Heading size={6} textColor="quartenary">
            Code for Philly Workshop
            <br />2017-03-07
          </Heading>
          <Text margin="2em 0 0" textColor="quartenary" size={1}>
            - @gnidan
          </Text>
          <Text textColor="quartenary" size={1}>
            <Link textColor="quartenary" href="https://github.com/gnidan"><FontAwesome name="github" /></Link>
            &nbsp;
            <Link textColor="quartenary" href="https://twitter.com/gnidan"><FontAwesome name="twitter" /></Link>
          </Text>
          <br />
          <Text size={6} textColor="quartenary">Presentation URL:</Text>
          <Text size={6}>
            <Link href="http://gnidan.org/codeforphilly" textColor="quartenary">
              <FontAwesome name="link" /> http://gnidan.org/codeforphilly
            </Link>
          </Text>
        </Slide>


        <Slide transition={"slide"} bgColor="secondary">
          <Heading size={4} textColor="primary">
            What are smart contracts,
          </Heading>
          <Heading size={4} textColor="primary">
            what can I do with them,
          </Heading>
          <Heading size={4} textColor="primary">
            how can I write them?
          </Heading>
          <Appear>
              <Heading margin="2em 0 0" size={4} lineHeight={1} textColor="tertiary">Plan for Tonight:</Heading>
          </Appear>
          <Appear>
            <List textColor="tertiary" ordered bold>
              <Appear>
              <ListItem>
                Overview&nbsp;
                <Image src={images.tree} width="1em" margin="0" />
                <Image src={images.tree2} width="1em" margin="0" />
              </ListItem>
              </Appear>
              <Appear>
              <ListItem>Play with software</ListItem>
              </Appear>
              <Appear>
              <ListItem>Write a simple smart contract</ListItem>
              </Appear>
              <Appear>
              <Text textColor="tertiary" margin="1em 4em 0"><em>Questions anytime!</em></Text>
              </Appear>
            </List>
          </Appear>
        </Slide>


        <Slide transition={"slide"} bgColor="secondary">
          <Heading size={8} caps textColor="primary">
            so first...
          </Heading>
        </Slide>


        <Slide transition={"slide"} bgColor="tertiary" textColor="primary">
          <Heading size={1} fit textColor="secondary" margin="1em 0 0">
            What is a Smart Contract? <Image src={images.contract} margin="0" width="1em"/>
          </Heading>
          <List>
            <Appear><ListItem>
              Computer program
            </ListItem></Appear>
            <Appear><ListItem>
              Has code,
              <Appear><span> storage, </span></Appear>
              <Appear><span>memory, </span></Appear>
              <Appear><span>I/O</span></Appear>
            </ListItem></Appear>
            <Appear><ListItem>Runs the same for everyone</ListItem></Appear>
            <Appear><ListItem>No servers, just other nodes</ListItem></Appear>
          </List>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary">
          <Particles
            height="8em"
            params={{
                particles: {
                    number: {
                        value: 50
                    },
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#cecece",
                            blur: 5
                        }
                    }
                }
            }} />
          <Heading size={6} textColor="primary">
            i.e., a "permanently running" computer process, stored as
          </Heading>
          <Heading size={5} textColor="secondary" bgColor="white" margin="0.5em 0 0.5em" padding="0.25em">
            blockchain data
          </Heading>
          <Appear>
            <Heading margin="1em 0 1em" size={5} textColor="secondary">
              Nodes communicate new blocks,
              advancing process state <Image
                src={images.floppy} width="1em" height="1em" margin="0" />
            </Heading>
          </Appear>
          <Appear>
            <Text size={8} textColor="primary">
              <em>
                Thought experiment:
                <br />
                What if Google Chrome were a smart contract?
              </em>
            </Text>
          </Appear>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>Civic Robot Future?</Heading>
          <Heading size={7} textColor="secondary">
            Hypothetical scenario:
            Municipal Recycling
          </Heading>
          <Heading size={3}>
            <Image src={images.recycle} width="2em" height="2em" />
          </Heading>
          <List ordered>
            <ListItem>Public recycling using smart contracts</ListItem>
            <ListItem>
              Recycle items, scan receptacle QR code
            </ListItem>
            <ListItem>Receive recycling credits (or money!)</ListItem>
          </List>
          <br />
          <Heading size={3} textColor="quartenary" lineHeight="2em">
            <Image src={images.wine} width="2em" height="2em" />
            <Image src={images.rightArrow} width="1em" height="1em" margin="0.5em" />
            <Image src={images.trash} width="2em" height="2em" />
            <Image src={images.rightArrow} width="1em" height="1em" margin="0.5em" />
            <Image src={images.money} width="2em" height="2em" />
          </Heading>
        </Slide>


        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Layout>
            <Fill>
              <Image src={images.industrial} width="4em" height="4em" />
              <Text textColor="secondary" bold>
                Recycling Plant
              </Text>
            </Fill>
            <Fill>
              <Image src={images.trash} width="4em" height="4em" />
              <Text textColor="secondary" bold>
                SmartBelly
              </Text>
            </Fill>
            <Fill>
              <Image src={images.phone} width="4em" height="4em" />
              <Text textColor="secondary" bold>
                App
              </Text>
            </Fill>
          </Layout>
          <br />
          <Layout>
            <Fill>
              <Appear>
                <Text textColor="primary">
                    Processes waste
                </Text>
              </Appear>
              <br />
              <Appear>
                <Text textColor="primary">
                    Sells recycled goods to market
                </Text>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Text textColor="primary">
                    Credits for disposal
                </Text>
              </Appear>
              <br />
              <Appear>
                <Text textColor="primary">
                    Brought to plant by robots<br />
                    <br />
                    <Image src={images.conveyer} width="2.5em" />
                </Text>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Text textColor="primary">
                    Trade credits for cash value
                </Text>
              </Appear>
              <br />
              <Appear>
                <Text textColor="primary">
                    Incentivizes participation
                </Text>
              </Appear>
            </Fill>
          </Layout>
          <br />
          <Layout>
            <Fill>
              <Appear>
                <Text textColor="secondary">
                    Entire operation controlled by smart contracts
                    &nbsp;<Image src={images.contract} width="1em" margin="0" />
                </Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide bgColor="tertiary" textColor="secondary">
          <BlockQuote>
            <Quote textColor="secondary">There is no cloud. It's just someone else's computer</Quote>
            <Cite textColor="primary">Chris Watterston</Cite>
          </BlockQuote>
        </Slide>


        <Slide transition={"slide"} bgColor="secondary">
          <Heading size={8} caps textColor="primary">
            ok let's blockchain
          </Heading>
        </Slide>

        <Slide transition={"slide"} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Install Parity
          </Heading>
          <Heading size={6} textColor="secondary">
            blockchain node / user interface
          </Heading>
          <Text>
            <Link href="https://github.com/ethcore/parity/releases/latest" textColor="quartenary">
              <FontAwesome name="link" /> Latest Release
            </Link>
          </Text>
          <br />
          <Text textColor="secondary" lineHeight={1.5}>
            Mac instructions:
            <CodePane textColor="primary" textSize={14} bgColor="white">
              brew tap ethcore/ethcore
            </CodePane>
            <CodePane textColor="primary" textSize={14} bgColor="white">
              brew install parity
            </CodePane>
            <CodePane textColor="primary" textSize={14} bgColor="white">
              parity --testnet --warp
            </CodePane>
          </Text>
          <br />
          <Text textColor="secondary" lineHeight={1.5}>
            Once it's running: <br />
            <Link href="http://127.0.0.1:8180" textColor="quartenary">
              <FontAwesome name="link" />
              <Code textColor="quartenary">
                http://127.0.0.1:8180/
              </Code>
            </Link>
          </Text>
        </Slide>


        <Slide transition={"slide"} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Install Parity
          </Heading>
          <Heading size={6} textColor="secondary">
            blockchain node / user interface
          </Heading>
          <Text>
            <Link href="https://github.com/ethcore/parity/releases/latest" textColor="quartenary">
              <FontAwesome name="link" /> Latest Release
            </Link>
          </Text>
          <br />
          <Text textColor="secondary" lineHeight={1.5}>
            Docker instructions:
            <CodePane textColor="primary" textSize={14} bgColor="white">
              docker pull ethcore/parity
            </CodePane>
            <CodePane textColor="primary" textSize={14} bgColor="white">
                docker run -p 8080:8080 -p 8180:8180 -p 8545:8545 ethcore/parity --ui-interface 0.0.0.0 --jsonrpc-interface 0.0.0.0 --dapps-interface 0.0.0.0 --testnet --warp
            </CodePane>
          </Text>
          <br />
          <Text textColor="secondary" lineHeight={1.5}>
            Once it's running: <br />
            <Link href="http://0.0.0.0:8180" textColor="quartenary">
              <FontAwesome name="link" />
              <Code textColor="quartenary">
                http://127.0.0.1:8180/
              </Code>
            </Link>
          </Text>
        </Slide>


        <Slide transition={"slide"} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Generate Account
          </Heading>
          <Text textColor="quartenary">
            <br />
            Follow on-screen instructions
          </Text>
          <Heading size={4} caps textColor="secondary">
            Get Test Ether
          </Heading>
          <Text textColor="quartenary">
            <br />
            Join presentation chatroom and paste account address
            (<Code textColor="quartenary">0x...</Code>):&nbsp;
          </Text>
          <Link href="https://gitter.im/gnidan/civic-robot-future" lineHeight={1.5}>
            <Image height="2em" src="https://badges.gitter.im/gnidan/civic-robot-future.svg" margin="0" />
          </Link>
        </Slide>


        <Slide transition={"slide"} bgColor="secondary">
          <Heading size={8} caps textColor="primary">
            time for code!
          </Heading>
        </Slide>


        <CodeSlide
          transition={[]}
          lang="js"
          bgColor="tertiary"
          code={require("raw-loader!../assets/SmartBelly.sol")}
          ranges={[
            { loc: [0, 270], title: "Basic SmartBelly contract" },
            { loc: [0, 1], note: "indicates Solidity version" },
            { loc: [4, 7], note: "storage values" },
            { loc: [8, 11], note: "constructor" },
            { loc: [12, 15], note: "default function" },
            { loc: [16, 19], note: "awards credits to user" },
            { loc: [20, 36], note: "convert credits to ETH" },
            { loc: [21, 22], note: "memory variables" },
            { loc: [23, 27], note: "calculates how much ETH to send" },
            { loc: [28, 29], note: "for security reasons:" },
            { loc: [29, 31], note: "... what if msg.sender were another contract?" },
            { loc: [31, 35], note: "failure to send replenishes credit balance" },
            { loc: [37, 40], note: "the owner can close the contract" },
            { loc: [38, 39], note: "sends contract balance to owner" },
            { loc: [41, 46], note: "modifiers change how functions run" },
            { loc: [44, 45], note: "this line becomes the function body" },
            { loc: [44, 45], note: "(filled in with `selfdestruct(owner)`)" },
            { loc: [42, 43], note: "`throw` immediately stops processing and prevents changes" },
            { loc: [0, 270], note: "full source at https://github.com/gnidan/civic-robot-future/blob/master/assets/SmartBelly.sol" },
          ]}/>


        <Slide transition={"slide"} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Solidity Documentation
          </Heading>
          <br />
          <Text fit>
            <Link href="https://solidity.readthedocs.io/" textColor="quartenary">
              <FontAwesome name="link" /> https://solidity.readthedocs.io/
            </Link>
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.robot} width="5em" height="5em" />
          <Heading size={2} lineHeight={1} textColor="secondary">
            Thank You!
          </Heading>
        </Slide>


      </Deck>
    );
  }
}
