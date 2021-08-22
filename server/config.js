require("dotenv").config();

const DEFAULTS = {
    PORT: 3000,
    M3OACCESSKEY: null
}

const port = process.env.PORT ?? DEFAULTS.PORT;
const accessKey = process.env.M3OACCESSKEY ?? DEFAULTS.M3OACCESSKEY;

module.exports = {
    port,
    accessKey
}
