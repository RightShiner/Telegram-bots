## DexQueryBot - The Dexer

## Dev

Rename .env.example to .env and fill out the variables with your API keys.
```sh
BOTFATHER_API_KEY=
BITQUERY_API_KEY=
THEGRAPH_API_KEY=
```

Install packages
```
npm install
```

Run bot
```
node index.js
```

## Usage

### Fetch command

The **fetch** command is a command for the Telegram bot that performs a series of operations to obtain transaction information within a specific date range. To use the command, users must follow these steps:

Type **/fetch** followed by the start and end date parameters in the format **startDate=YYYY-MM-DD endDate=YYYY-MM-DD**.  
For example, **/fetch startDate=2022-01-01 endDate=2022-01-31**.
