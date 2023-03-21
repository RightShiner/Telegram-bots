const getClientIds = require("./getClientIds");

function getNetworksByClient(clientId) {
  const ids = getClientIds();
  const networks = {
    [ids[0]]: ["ethereum", "celo"],
    [ids[1]]: "polygon",
    [ids[2]]: "polygon",
  }
  return networks[clientId];
}

module.exports = getNetworksByClient;