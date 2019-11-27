

# TIP: Let's talk Shell!
# Put this alias in your .bash_profile or .zshrc
# This will print out and colorize all of the npm
# scripts in the relative package.json file 😀
alias npmscripts='cat ./package.json | jq .scripts'

# you need jq for this to work
# Linux: $sudo apt-get update -y && sudo apt-get install jq -y
# macOS (brew): $brew install jq 

