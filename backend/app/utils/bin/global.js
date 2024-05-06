'use strict';

const fs = require('fs');
const yml = require('yaml');
const os = require('os');
const path = require('path');
const GLOBAL_OBJ = {};

/**
 * Load 3rdParty configuration
 */
const load3rdPartyConfig = () => {
    const _path = path.join(os.homedir(), process.env.CONFIG_BASE_PATH, '3rdPartyConfigs.yml');
    const file = fs.readFileSync(_path, 'utf-8');
    const config = yml.parse(file, 'utf8');    
    GLOBAL_OBJ['3rdPartyConfig'] = config;
}


/**
 * Load RazorPay configuration
 */
const loadRazorPayConfig = () => {
    const _path = path.join(os.homedir(), process.env.CONFIG_BASE_PATH, 'razorPayConfigs.yml');
    const file = fs.readFileSync(_path, 'utf-8');
    const config = yml.parse(file, 'utf8');    
    GLOBAL_OBJ['razorPayConfig'] = config;
}
/**
 *
 * @param {*} isTest
 */
const returnGpsEnvObject = (isTest, flightObj) => {
    let gpsEnv = null;
    
    if(process.env.DATABASE_ENV === 'local' && isTest) {        
        gpsEnv = flightObj['local'];
    } else {        
        if(process.env.DATABASE_ENV === "live") {
            if(!isTest) {
                gpsEnv = flightObj['live'];
            } else {
                gpsEnv = flightObj[process.env.NODE_ENV];
            }
        } else {
            gpsEnv = flightObj[process.env.NODE_ENV];
        }
    }    
    return gpsEnv;
}

module.exports = {
    load3rdPartyConfig,       
    GLOBAL_OBJ,
    returnGpsEnvObject,
    loadRazorPayConfig
};

