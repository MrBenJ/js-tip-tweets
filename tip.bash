#!/bin/bash


# TIP: Use this handy alias to run npm scripts
# In a similar fashion to what yarn does!
alias npmr="npm run $1 -- $2"

# BEFORE
npm run my-script -- value --flag --verbose

# AFTER
npmr my-script value --flag --verbose