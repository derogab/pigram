# PiGram

[![GitHub package.json version](https://img.shields.io/github/package-json/v/derogab/pigram?style=flat-square)](https://github.com/derogab/pigram)
[![GitHub stars](https://img.shields.io/github/stars/derogab/pigram.svg?style=flat-square)](https://github.com/derogab/pigram/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/derogab/pigram.svg?style=flat-square)](https://github.com/derogab/pigram/network)
[![GitHub issues](https://img.shields.io/github/issues/derogab/pigram.svg?style=flat-square)](https://github.com/derogab/pigram/issues)
[![Patreon](https://img.shields.io/badge/Sponsor-Patreon-orange?style=flat-square)](https://patreon.com/derogab)
[![Ko-Fi](https://img.shields.io/badge/Sponsor-Ko--Fi-9cf?style=flat-square)](https://ko-fi.com/derogab)





PiGram is a **Pi Bash in Telegram Bot**.

- [Create a Bot](#create-a-bot)
- [Download](#download)
- [Install dependencies](#install-dependencies)
- [Configure](#configure)
- [Run](#run)

### Create a Bot
Create your private Telegram Bot using [Bot Father](https://t.me/BotFather) and get your tokens.
Get more info [here](https://core.telegram.org/bots#3-how-do-i-create-a-bot).

### Download
Download the source using `git` or [directly](https://github.com/derogab/pigram/archive/master.zip).
```shell
git clone https://github.com/derogab/pigram
```

### Install dependencies
Install PM2 globally.
```
yarn global add pm2
```
In the _pigram_ folder, install all dependencies.
```shell
yarn
```

### Configure
Create configuration files: `config.js` and `pm2.json`.  
You can easily copy template files (`.tmpl`) and then edit them with your configurations.

### Run
Finally, start the bot.
```shell
pm2 start pm2.json
```
