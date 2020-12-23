const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const TOKEN = '1414888494:AAFv2kvoEYuToS0XYuiZH6ujwraYSdCogBU'

console.log('Bot has been started ....')


const bot = new TelegramBot(TOKEN, {polling: true})
//  обработка команд
// /start
bot.onText(/\/comand1/, msg  => {
  const { id } = msg.chat
  img = 'https://www.calend.ru/img/content/i0/293_1.jpg'
  // bot.sendMessage(id, debug(msg))
  bot.sendPhoto(id, img)
})

bot.onText(/\/comand2/, msg  => {
  const { id } = msg.chat
  img ='http://xn----ctbdcioqwjbcvn.xn--p1ai/wp-content/uploads/2020/01/1260614-696x392.jpg'
  // bot.sendMessage(id, debug(arr))
  bot.sendPhoto(id, img)
})


// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//
//   bot.sendMessage(chatId, 'Прослушиваю ваши сообщения');
// })

