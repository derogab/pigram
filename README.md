<h1 align="center">PiGram</h1>
<p align="center">A Pi Bash in Telegram Bot</p>
<p align="center">
  <a href="https://github.com/derogab/pigram">
    <img src="https://img.shields.io/github/package-json/v/derogab/pigram?style=flat-square">
  </a>
  <a href="https://github.com/derogab/pigram/stargazers">
    <img src="https://img.shields.io/github/stars/derogab/pigram.svg?style=flat-square">
  </a>
  <a href="https://github.com/derogab/pigram/network">
    <img src="https://img.shields.io/github/forks/derogab/pigram.svg?style=flat-square">
  </a>
  <a href="https://github.com/derogab/pigram/issues">
    <img src="https://img.shields.io/github/issues/derogab/pigram.svg?style=flat-square">
  </a>
</p>

- [Create a Bot](#create-a-bot)
- [Download](#download)
- [Install dependencies](#install-dependencies)
- [Configure](#configure)
- [Usage](#Usage)

### Create a Bot
Create your private Telegram Bot using [Bot Father](https://t.me/BotFather) and get your tokens.
Get more info [here](https://core.telegram.org/bots#3-how-do-i-create-a-bot).

### Download
Download the source using `git` or [directly](https://github.com/derogab/pigram/archive/master.zip).
```shell
git clone https://github.com/derogab/pigram
```

### Install dependencies
In the _pigram_ folder, install all dependencies.
```shell
npm install
```

### Configure
Create configuration files: `config.js` and `pm2.json`.  
You can easily copy template files (`.tmpl`) and then edit them with your configurations.

### Usage
Finally, start the bot.
```shell
node bot.js
```
Or, if you prefer, use [PM2](https://github.com/Unitech/pm2):
###### Install PM2 globally
```shell
npm install -g pm2 
```
###### Run using PM2
```shell
pm2 start pm2.json
```

### Credits
_PiGram_ is made with ♥ by [derogab](https://github.com/derogab) and it's released under the [MIT license](./LICENSE).

### Contributors

<a href="https://github.com/derogab/pigram/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=derogab/pigram" />
</a>

### Tip
If you like this project or directly benefit from it, please consider buying me a coffee:  
🔗 `bc1qd0qatgz8h62uvnr74utwncc6j5ckfz2v2g4lef`  
⚡️ `derogab@sats.mobi`  
💶 [Sponsor on GitHub](https://github.com/sponsors/derogab)

### Stargazers over time
[![Stargazers over time](https://starchart.cc/derogab/pigram.svg?variant=adaptive)](https://starchart.cc/derogab/pigram)
