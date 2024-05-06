const envConfig = require("./env.config");
module.exports = {
    secret: envConfig.JwtSecretKey
};