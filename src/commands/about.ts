import { Context } from 'telegraf';
import createDebug from 'debug';

import { author, name, version } from '../../package.json';

const debug = createDebug('bot:about_command');

const about = () => async (ctx: Context) => {
  const message = `This is Made By A Human\n*${name} ${version}*\n\n${author}`;
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: 'click here',
          url: 'https://t.me/riturajps'
        }
      ]
    ]
  };

  debug(`Triggered "about" command with message \n${message}`);
  await ctx.replyWithMarkdownV2(message, {
    parse_mode: 'Markdown',
    reply_markup: keyboard,
    disable_web_page_preview: true // Disables preview for the message itself
  });
};

export { about };
