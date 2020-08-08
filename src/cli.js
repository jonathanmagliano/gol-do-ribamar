#!/usr/bin/env node

const meow = require('meow');
const goldoribamar = require('./index')

// TODO: when tail call optimization is implemented on NodeJS, simplify this.
const cliMode = async ({ flags }) => {
  while(true) await goldoribamar();
};

const cliInterface = meow({});

cliMode(cliInterface);