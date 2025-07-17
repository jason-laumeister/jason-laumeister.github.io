#!/usr/bin/env bash
set -e # halt script on error

echo 'Testing local hugo jasonlaumeister.com including DRAFTS...'
hugo server --disableFastRender -D