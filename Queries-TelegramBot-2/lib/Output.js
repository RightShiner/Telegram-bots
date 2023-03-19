class Output {
  constructor() {
    this._botVolume = 0;
    this._totalPoolVolume = '';
    this._nTxns = 0;
    this._gasFees = 0;
    this._flVolume = 0;
  }

  // Getter and Setter methods for botVolume
  getBotVolume() {
    return this._botVolume;
  }

  setBotVolume(newBotVolume) {
    this._botVolume = newBotVolume;
  }

  // Getter and Setter methods for totalPoolVolume
  getTotalPoolVolume() {
    return this._totalPoolVolume;
  }

  setTotalPoolVolume(newTotalPoolVolume) {
    this._totalPoolVolume = newTotalPoolVolume;
  }

  // Getter and Setter methods for nTxns
  getNTxns() {
    return this._nTxns;
  }

  setNTxns(newNTxns) {
    this._nTxns = newNTxns;
  }

  // Getter and Setter methods for gasFees
  getGasFees() {
    return this._gasFees;
  }

  setGasFees(newGasFees) {
    this._gasFees = newGasFees;
  }

  // Getter and Setter methods for flVolume
  getFlVolume() {
    return this._flVolume;
  }

  setFlVolume(newFlVolume) {
    this._flVolume = newFlVolume;
  }

  getFull() {
    return {
      botVolume: this._botVolume,
      totalPoolVolume: this._totalPoolVolume,
      nTxns: this._nTxns,
      gasFees: this._gasFees,
      flVolume: this._flVolume,
    }
  }

}
module.exports = Output;
