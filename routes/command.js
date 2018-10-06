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

        const si = require('systeminformation');
        const publicIp = require('public-ip');
        const humanizeDuration = require('humanize-duration');
        const pretty = require('prettysize');
        const deasync = require('deasync');
        
        si.getAllData(function(data) {

            // Get public IP
            var sync = true;
            var public_ip = false;
            publicIp.v4().then(ip => {
                public_ip = ip;
                sync = false;
            });
            while(sync) { deasync.sleep(100); }
            
            // Init
            var status = "";
            // System informations
            status += "💻 System Informations";
            status += "\n_Hostname:_ *"+data.os.hostname+"*";
            status += "\n_Distro:_ *"+data.os.distro+" "+data.os.release+"*";
            status += "\n_Architecture:_ *"+data.os.arch+"*";
            status += "\n_Kernel:_ *"+data.versions.kernel+"*";
            // Uptime
            status += "\n\n⏳ Time";
            status += "\n_Up:_ *"+humanizeDuration(data.time.uptime * 1000)+"*";
            // Memory
            status += "\n\n🧠 Memory";
            status += "\n_Used:_ *"+pretty(data.mem.used)+"*";
            status += " / _Free:_ *"+pretty(data.mem.free)+"*";
            status += "\n_Available:_ *"+pretty(data.mem.available)+"*";
            status += "\n_Total:_ *"+pretty(data.mem.total)+"*";
            // Temperature
            status += "\n\n🌡️ Temperature";
            status += "\n_Main:_ *"+data.temp.main+"°*";
            status += " / _Max:_ *"+data.temp.max+"°*";
            for(var i = 0; i < data.temp.cores.length; i++){
                status += "\n_Core "+(i+1)+":_ *"+data.temp.cores[i]+"°*";
            }
            // Network
            status += "\n\n🌐 Network";
            status += "\nLocal 🏠";
            for(var i = 0; i < data.net.length; i++){
                status += "\n_"+data.net[i].iface+":_ *"+(data.net[i].ip4 || data.net[i].ip6)+"*";
            }
            if(public_ip){
                status += "\nPublic 🌍";
                status += "\n_IP:_ *"+public_ip+"*";
            }
            
            ctx.reply(status, {disable_web_page_preview: true, parse_mode: 'Markdown'});
        });

    }
    bot.command('status', status);
};