/**
 * Hears
 * =====================
 * Receive text messages
 */
module.exports = function (bot, config, request, shell) {

    bot.on('text', (ctx) => {

        if(ctx.message.from.username != config.admin){
            ctx.reply('⛔️');
        }
        else shell.exec(ctx.update.message.text.trim(), function(code, stdout, stderr) {
            if(code == 0)
                ctx.reply(stdout);
            else
                ctx.reply('⛔️');
        });
    });

};
