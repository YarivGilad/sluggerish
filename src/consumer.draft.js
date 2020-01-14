const log = require('@ajar/marker');

// const slugger = require('./index').slugger;
const {slugger} = require('./index');

const result = slugger('hello how are you','my name is mosh','what is up');

log.magenta(result)