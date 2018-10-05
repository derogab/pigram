# PiGram

[![Version](https://img.shields.io/badge/version-1.0.1-brightgreen.svg)](https://github.com/derogab/pigram)
[![GitHub stars](https://img.shields.io/github/stars/derogab/pigram.svg)](https://github.com/derogab/pigram/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/derogab/pigram.svg)](https://github.com/derogab/pigram/network)
[![GitHub issues](https://img.shields.io/github/issues/derogab/pigram.svg)](https://github.com/derogab/pigram/issues)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://paypal.me/derogab)

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
Enter in the _pigram_ folder and install all dependencies.
```shell
cd pigram && npm install
```

### Configure
Create configuration files: `config.js` and `pm2.json`.  
You can easily copy template files (`.tmpl`) and then edit them with your configurations.

### Run
Finally, start the bot.
```shell
pm2 start pm2.json
```