
require('dotenv').config()

function getClientIds() {
  const ids = process.env.CLIENT_IDS
  if (!ids) {
    throw new Error("CLIENT_IDS undefined")
  }
  return ids.split(",")
}

module.exports = getClientIds;