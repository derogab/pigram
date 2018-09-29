/**
 * Commands
 * =====================
 * Write / and see commands of bot
 */
module.exports = function(bot, config, request, shell) {
    /**
     * Command: help
     * =====================
     * Send list of bot commands
     */
    function help(ctx) {
        ctx.reply("Pi Bash in Telegram Bot\n\nOwner: @derogab\n\nMore info: https://github.com/derogab/pigram");
    }
    bot.command('help', help);

    /**
     * Command: start
     * =====================
     * Send welcome sticker and help message
     */
    function start(ctx) {
        ctx.replyWithSticker('CAADAgADaw0AAs5SYgHpY3DbpufGAQI');
        help(ctx);
    }
    bot.command('start', start);
};