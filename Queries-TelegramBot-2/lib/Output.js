class Output {
  constructor() {
    this.pools = {
      ethereum: {
        uniswap: {
          botVolume: 0,
          totalPoolVolume: '',
          nTxns: 0,
          gasFees: 0,
          flVolume: 0,
        }
      },
      celo: {
        uniswap: {
          botVolume: 0,
          totalPoolVolume: '',
          gasFees: 0,
        }
      }
    }
  }

  // Getter and Setter methods for botVolume
  getBotVolume(pool) {
    return this.pools[pool]['uniswap'].botVolume;
  }

  setBotVolume(pool, newBotVolume) {
    this.pools[pool]['uniswap'].botVolume = newBotVolume;
  }

  // Getter and Setter methods for totalPoolVolume
  getTotalPoolVolume(pool) {
    return this.pools[pool]['uniswap'].totalPoolVolume;
  }

  setTotalPoolVolume(pool, newTotalPoolVolume) {
    this.pools[pool]['uniswap'].totalPoolVolume = newTotalPoolVolume;
  }

  // Getter and Setter methods for nTxns
  getNTxns(pool) {
    return this.pools[pool]['uniswap'].nTxns;
  }

  setNTxns(pool, newNTxns) {
    this.pools[pool]['uniswap'].nTxns = newNTxns;
  }

  // Getter and Setter methods for gasFees
  getGasFees(pool) {
    return this.pools[pool]['uniswap'].gasFees;
  }

  setGasFees(pool, newGasFees) {
    this.pools[pool]['uniswap'].gasFees = newGasFees;
  }

  // Getter and Setter methods for flVolume
  getFlVolume(pool) {
    return this.pools[pool]['uniswap'].flVolume;
  }

  setFlVolume(pool, newFlVolume) {
    this.pools[pool]['uniswap'].flVolume = newFlVolume;
  }

  getFull(pool) {
    return {
      ...this.pools[pool]['uniswap']
    }
  }

}
module.exports = Output;
