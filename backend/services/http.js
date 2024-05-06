'use strict';
const axios = require('axios');

const fs = require("fs");
const os = require("os");
const path = require("path");

const https = require('https');
const CURRENT_FILE_NAME = 'http';
const logger = require('../app/utils/logger');

/**
 * Get data
 */
const GET = async (link, options) => {
    try {
        axios.defaults.headers.common = {
        };
        if (options && options.headers) {
            const keys = Object.keys(options.headers);            
            keys.forEach(_k => {
                axios.defaults.headers.common[_k] = options.headers[_k]
            });
        }
        return await axios({ 
            method: 'get',
            url: link,
        });
    }
    catch (error) {
        logger.error(`error_${CURRENT_FILE_NAME}_GET`, error.message);
        throw error;
    }
}

/**
 * Post data
 */
const POST = async (payload, options) => {
    try {    
        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        };
        if (options && options.headers) {
            const keys = Object.keys(options.headers);

            keys.forEach(_k => {
                axios.defaults.headers.common[_k] = options.headers[_k]
            });
        }
        return await axios({ 
            method: 'post',
            url: payload.url,
            data: payload.searchData
        });
    } catch (error) {  
            
        //logger.error(`error_${CURRENT_FILE_NAME}_POST`, error.message);
        throw error;
    }
}

/**
 * PUT data
 */
const PUT = async (payload, options) => {
    try {
        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        };
        if (options && options.headers) {
            const keys = Object.keys(options.headers);
            keys.forEach(_k => {
                axios.defaults.headers.common[_k] = options.headers[_k]
            });
        }
        return await axios({ 
            method: 'put',
            url: payload.url,
            data: payload.data
        });
    } catch (error) {
        logger.error(`error_${CURRENT_FILE_NAME}_PUT`, error.message);
        throw error;
    }
}
/**
 * Patch data
 */
const PATCH = async (payload, options) => {
    try {
        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        };
        if (options && options.headers) {
            const keys = Object.keys(options.headers);
            keys.forEach(_k => {
                axios.defaults.headers.common[_k] = options.headers[_k]
            });
        }
        return await axios({ 
            method: 'patch',
            url: payload.url,
            data: payload.data
        });
    } catch (error) {
        logger.error(`error_${CURRENT_FILE_NAME}_PATCH`, error.message);
        throw error;
    }
}
/**
 * Delete
 * @param {*} payload
 * @param {*} options
 * @returns
 */
const DELETE = async (payload, options) => {
    try {
        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        };
        if (options && options.headers) {
            const keys = Object.keys(options.headers);
            keys.forEach(_k => {
                axios.defaults.headers.common[_k] = options.headers[_k]
            });
        }
        return await axios({ 
            method: 'delete',
            url: payload.url,
            data: payload.data
        });
    } catch (error) {
        logger.error(`error_${CURRENT_FILE_NAME}_DELETE`, error.message);
        throw error;
    }
}


const getSession = async (body) => {
    try {
        let payload = {};
        const { applepay } = GLOBAL_OBJ['3rdPartyConfig'];
        const endpoint = applepay.endpoints.paymentSession;
        payload.url = `${applepay.host}${endpoint}`;
        const httpsAgent = new https.Agent({
            // rejectUnauthorised: false, /** Shivam commenting header for testing*/
            // keepAlive: true,
            cert: merchantIdentityCert,
            key: merchantIdentityKey,
            // maxVersion: 'TLSv1.2',
            // minVersion: 'TLSv1.2'
        })
        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        };
        const initiativeContext = body.initiativeContext
        delete body.initiativeContext;
        payload.data = body;
        return await axios({
            method: 'post',
            /**  url: payload.url,  This URL will used in production*/
            url: initiativeContext,  /** Set URL initiative context for testing */
            data: payload.data,
            httpsAgent
        });  
    } catch (error) {
        logger.error(`error_${CURRENT_FILE_NAME}_getSession`, error.message);
        throw error;
    }
}
module.exports = {   
    GET,
    POST,
    PUT,
    PATCH,
    DELETE,  
    getSession,
}