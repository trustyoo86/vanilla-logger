'use strict';

var should = require('should');

var vLogger = require('../vanilla-logger');

describe('vanilla logger test', function () {
  it ('if vLogger debugMode is true, console.log is operate', function () {
    vLogger.debugMode(true);
    console.log('logger debug mode true, console.log operation is suceess');

    should(vLogger.getDebugMode()).be.equal(true);
  });

  it ('if vLogger debugMode is true, console.error is operate', function () {
    vLogger.debugMode(true);
    console.error('logger debug mode true, console.error operation is suceess');

    should(vLogger.getDebugMode()).be.equal(true);
  });

  it ('if vLogger debugMode is true, console.info is operate', function () {
    vLogger.debugMode(true);
    console.info('logger debug mode true, console.info operation is suceess');

    should(vLogger.getDebugMode()).be.equal(true);
  });

  it ('if vLogger debugMode is true, console.warn is operate', function () {
    vLogger.debugMode(true);
    console.warn('logger debug mode true, console.warn operation is suceess');

    should(vLogger.getDebugMode()).be.equal(true);
  });


  //debug mode false
  it ('if vLogger debugMode is false, console.log is not operate', function () {
    vLogger.debugMode(false);
    console.log('logger debug mode false, console.log operation is not suceess');

    should(vLogger.getDebugMode()).be.equal(false);
  });

  it ('if vLogger debugMode is false, console.error is not operate', function () {
    vLogger.debugMode(false);
    console.error('logger debug mode false, console.error operation is not suceess');

    should(vLogger.getDebugMode()).be.equal(false);
  });

  it ('if vLogger debugMode is false, console.info is not operate', function () {
    vLogger.debugMode(false);
    console.info('logger debug mode false, console.info operation is not suceess');

    should(vLogger.getDebugMode()).be.equal(false);
  });

  it ('if vLogger debugMode is false, console.warn is not operate', function () {
    vLogger.debugMode(false);
    console.warn('logger debug mode false, console.warn operation is not suceess');

    should(vLogger.getDebugMode()).be.equal(false);
  });
});
