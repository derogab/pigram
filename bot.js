/**
 * PiGram
 * =====================
 * Pi Bash in Telegram Bot
 *
 * @author:     Gabriele De Rosa [@derogab]
 * @file:       bot.js
 * @version:    1.0.1
 * @link        GitHub Repo:  https://github.com/derogab/pigram
 */

/**
 * Libs
 * =====================
 * All config and required open source libs
 */
const Telegraf = require('telegraf');
const config = require(__dirname + '/config');
const path = require('path');
const request = require('request');
const shell = require('shelljs');

/**
 * Init
 * =====================
 * Get token and username of bot from /config.js
 * If not exist rename config.js.tmpl to config.js and change strings
 */
const bot = new Telegraf(config.bot_token, {username: config.bot_username});

/**
 * Router
 * =====================
 * Core of bot
 */
require(__dirname + '/routes/command')(bot, config, request, shell);
require(__dirname + '/routes/hears')(bot, config, request, shell);
require(__dirname + '/routes/inline_query')(bot, config, request, shell);

/**
 * Polling
 * =====================
 * Telegraf Socket
 */
bot.startPolling();