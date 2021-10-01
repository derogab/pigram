/**
 * PiGram
 * =====================
 * Pi Bash in Telegram Bot
 *
 * @author:     Gabriele De Rosa [@derogab]
 * @file:       bot.js
 * @version:    1.1.5
 * @link        GitHub Repo:  https://github.com/derogab/pigram
 */

/**
 * Libs
 * =====================
 * All config and required open source libs
 */
const { Telegraf } = require('telegraf');
const config = require(__dirname + '/config');

/**
 * Init
 * =====================
 * Get token and username of bot from /config.js
 * If not exist rename config.js.tmpl to config.js and change strings
 */
const bot = new Telegraf(config.bot_token, {username: config.bot_username});

/**
 * Graceful stop
 * =====================
 * Enable graceful stop
 */
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

/**
 * Router
 * =====================
 * Core of bot
 */
require(__dirname + '/routes/command')(bot, config);
require(__dirname + '/routes/hears')(bot, config);
require(__dirname + '/routes/inline_query')(bot, config);

/**
 * Polling
 * =====================
 * Telegraf Socket
 */
bot.launch();