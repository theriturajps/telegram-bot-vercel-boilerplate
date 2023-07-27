import { Context } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

const replyToMessage = (ctx: Context, messageId: number, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
    parse_mode: 'Markdown', // Set parse_mode to Markdown
  });

const greeting = () => async (ctx: Context) => {
  debug('Triggered "greeting" text command');

  const messageId = ctx.message?.message_id;
  const userId = ctx.message?.from.id;
  const userName = `${ctx.message?.from.first_name}`;

  if ((ctx.message as any)?.text === '/start') { // Use type assertion to access the 'text' property
    if (messageId && userId) {
      const helloMessage = `Hello, [${userName}](tg://user?id=${userId})!, welcome to the bot\n\nBy @RituRajPS`; // Use Markdown syntax for hyperlink
      await replyToMessage(ctx, messageId, helloMessage);
    }
  }
};

export { greeting };
