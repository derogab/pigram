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

        var reply = "*Pi* Bash in Tele*gram* Bot";
        if(config.admin != ""){
            reply += "\n\nOwner: @"+config.admin;
        }
        reply += "\n\nMore info: https://github.com/derogab/pigram";

        ctx.reply(reply, {disable_web_page_preview: true, parse_mode: 'Markdown'});
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

    /**
     * Command: status
     * =====================
     * Send pi status
     */
    function status(ctx) {

        var pc = require('pc');
        const humanizeDuration = require('humanize-duration');
        const pretty = require('prettysize');

        var status = "💻 *"+pc.hostname().name+"*";
        status += "\n\n⏳ *"+humanizeDuration(pc.uptime().time * 1000)+"*";
            var memory = pc.memory();
        status += "\n\n🧠 Memory";
        status += "\nFree: *"+pretty(memory.free)+"*";
        status += "\nTotal: *"+pretty(memory.total)+"*";
            var nets = pc.networkInterfaces();
        status += "\n\n🌍 Network";
        for(net in nets)
            if(nets[net][0].address != "" && !nets[net][0].internal)
                status += "\nIP: *"+nets[net][0].address+"*";
        
        ctx.reply(status, {disable_web_page_preview: true, parse_mode: 'Markdown'});

    }
    bot.command('status', status);
};