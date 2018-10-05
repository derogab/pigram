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

        if(ctx.message.from.username != config.admin){
            return ctx.reply('⛔️'); // no auth
        }

        var pc = require('pc');
        const humanizeDuration = require('humanize-duration');
        const pretty = require('prettysize');
        const deasync = require('deasync');

        var status = "💻 *"+pc.hostname().name+"*";
        status += "\n\n⏳ *"+humanizeDuration(pc.uptime().time * 1000)+"*";
            var memory = pc.memory();
        status += "\n\n🧠 Memory";
        status += "\nFree: *"+pretty(memory.free)+"*";
        status += "\nTotal: *"+pretty(memory.total)+"*";
        status += "\n\n🏠 LAN";
            var nets = pc.networkInterfaces();
        for(net in nets)
            if(nets[net][0].address != "" && !nets[net][0].internal)
                status += "\nIP: *"+nets[net][0].address+"*";
        
        var sync = true;
        var public_ip = false;
        pc.publicIP().then(ip => {
            public_ip = ip;
            sync = false;
        });
        while(sync) { deasync.sleep(100); }

        if(public_ip){
            status += "\n\n🌍 Network";
            status += "\nIP: *"+public_ip+"*";
        }
        
        ctx.reply(status, {disable_web_page_preview: true, parse_mode: 'Markdown'});

    }
    bot.command('status', status);
};