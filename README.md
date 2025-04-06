# T3RN BRIDGE BOT

## Table Of Contents
- [T3RN BRIDGE BOT](#t3rn-bridge-bot)
  - [Table Of Contents](#table-of-contents)
  - [T3RN Airdrop V2](#t3rn-airdrop-v2)
  - [BOT FEATURE](#bot-feature)
  - [Prerequisite](#prerequisite)
  - [Setup \& Configure BOT](#setup--configure-bot)
    - [Linux](#linux)
    - [Windows](#windows)
  - [Update Bot](#update-bot)
  - [NOTE](#note)
  - [CONTRIBUTE](#contribute)
  - [SUPPORT](#support)

## T3RN Airdrop V2
New Airdrops : T3RN V2
🪂 Register : https://bridge.t2rn.io/

📈 SWAP AND EARN BRN

## BOT FEATURE

- Multi Account Support
- Auto Swap Betwen BASE > ARB OR ARB > BASE

## Prerequisite

- Git
- Node JS
- BASE Sepolia ETH BALANCE / ARB Sepolia ETH BALANCE Depends on config

## Setup & Configure BOT

### Linux
1. Clone project repo
```bash
git clone https://github.com/Widiskel/t3rn-bridge-bot.git
```
And then
```bash
cd t3rn-bridge-bot
```
3. Run 
   ```
   npm install
   ```
4. Run 
   ```
   cp accounts/accounts_tmp.js accounts/accounts.js
   ```
5. Run 
   ```
   nano accounts/accounts.js
   ```
   and setup your accounts usig PK or Seed
6. adjust the `config.js`
   ```
   nano config.js
   ```
   especially raw data part, to match with your raw data. 1 account have 1 raw data
7. to start the app run 
   ```
   npm run start
   ```
   
### Windows
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo `git clone https://github.com/Widiskel/t3rn-bridge-bot.git` and cd to project dir `cd t3rn-bridge-bot`
3. Run `npm install`
4. Navigate to `t3rn-bridge-bot` directory. 
5. Navigate to `accounts` directory and rename `accounts_tmp.js` to `accounts.js`.
6. Open `accounts.js` and setup your wallet. 
7.  Now back to the `t3rn-bridge-bot` folder
8.  Adjust `config.js`, especially on BRIDGERAWDATA part, 1 account have 1 raw data
9.  Copy `config.js` and `accounts` folder to `app` folder
10. To start the app open your `Command Prompt` or `Power Shell` again and run `node app/index.js`.

## Update Bot

To update bot follow this step :
1. run `git pull` or `git pull rebase` , if error run `git stash && git pull`
2. run `npm update`
3. start the bot

## NOTE

You can configure 
- Amount to bridge
- Bridge Contract
- Raw Data (1 Account 1 RAW DATA)
On config file

If you did'nt get BRN Point or not Receiving bridged assets, change the config BASE or ARB RAWDATA with yours. Where to get it ? do manual TX from ARB to BASE or BASE to ARB, and go to explorer and copy the Input Data as HEX. Or you can just copy paste from wallet confirmation approval on input / data section.

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks. To get original unencrypted code just DM me on my social media original (index.js and src folder) are Obfuscated during build

## SUPPORT

want to support me for creating another bot ?
**star** my repo or buy me a coffee on

EVM : `0x1f0ea6e0b3590e1ab6c12ea0a24d3d0d9bf7707d`

SOLANA : `3tE3Hs7P2wuRyVxyMD7JSf8JTAmEekdNsQWqAnayE1CN`
