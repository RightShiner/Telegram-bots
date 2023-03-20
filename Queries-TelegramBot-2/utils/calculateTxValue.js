
const { formatEther } = require("@ethersproject/units")

async function calculateTransactionValue(gasLimit, gasPrice, celoPrice) {
  const gasUsed = formatEther((gasLimit * gasPrice).toString());
  return parseFloat(gasUsed) * celoPrice;
}

module.exports = calculateTransactionValue;