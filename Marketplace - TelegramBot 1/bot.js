import { Telegraf } from 'telegraf';
import { fetchPair } from './utils.js';
import { config } from 'dotenv';

config()
const bot = new Telegraf(process.env.BOT_TOKEN);
const wallet_address = process.env.WALLET_ADDRESS
const instruction = `
Hello

## Commands
/start: view instruction
/help: view instruction
/calculate: calculate cost or volume
/open: open trading request
/payment: submit proof of payment

## Usage
/calculate {toCalculate} {pairAddress} {amount}
/open {pairAddress}
/payment {txHash}

## Parameters
toCalculate: is either cost (if you want to calculate cost) or volume (if you want to calculate volume)
pairAddress: pair or pool address. It has to on ethereum blockchain and uniswap protocol
amount: amount of volume (if toCalculate is cost) or cost (if toCalculate is volume)
txHash: Transaction hash of your payment to the provided wallet address

## Examples
* /calculate cost 0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640 1000000
* /calculate volume 0xcbcdf9626bc03e24f779434178a73a0b4bad62ed 4500
* /open 0x9928e4046d7c6513326ccea028cd3e7a91c7590a
* /payment 0x02865ad76c1c44ccbd19ed3d9aad4cb1e4a187511d867fbb2164a167b4ce7af0
`

bot.start((ctx) => {
    ctx.reply(instruction)
})

bot.help((ctx) => {
    ctx.reply(instruction)
})

bot.command('open', (ctx) => {
    const inputArray = ctx.message.text.split(" ")
    if (inputArray.length != 2) {
        ctx.reply('Provide pair address with the open command')
    } else {
        const pairAddress = inputArray[1]
        ctx.reply(`
            Please send payment to ${wallet_address}.
            Then submit tx hash with /payment {tx hash}
        `)
    }
})

bot.command('calculate', async(ctx) => {
    const inputArray = ctx.message.text.split(" ")
    const errorMessage = "Command used wrongly. Use /help to view examples"
    if (inputArray.length != 4) {
        await ctx.reply(errorMessage)
    } else {
        const toCalculate = inputArray[1]
        const pairAddress = inputArray[2]
        const amount = parseFloat(inputArray[3])
        const pair = await fetchPair(pairAddress)
        console.log(pair)
        if (!pair) {
            await ctx.reply("Pair not found")
        } else if (toCalculate === 'cost') {
            const recommendedCost = 1.5 * amount * pair.feePercent / 100
            await ctx.reply(`$${recommendedCost} is the recommeded cost for $${amount} volume on ${pair.token0}-${pair.token1} pool`)
        } else if (toCalculate === 'volume') {
            const expectedVolume = 100 * amount / pair.feePercent / 1.5
            await ctx.reply(`$${expectedVolume} is the expected volume from $${amount} payment on ${pair.token0}-${pair.token1} pool`)
        } else {
            await ctx.reply(errorMessage)
        }
    }
})

bot.command('payment', (ctx) => {
    const inputArray = ctx.message.text.split(" ")
    if (inputArray.length != 2) {
        ctx.reply("Please provide the transaction hash of payment")
    } else {
        const txHash = inputArray[1]
        ctx.reply(`Your payment would be confirmed. Thanks`)
    }
})

bot.on('message', (ctx) => {
    ctx.reply(instruction)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
