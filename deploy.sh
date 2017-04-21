#!/bin/sh
git config --global user.email "devteam+deweybot@technologyadvice.com"
git config --global user.name "deweybot"
$(npm bin)/ta-script circle_ci/create_changelog
