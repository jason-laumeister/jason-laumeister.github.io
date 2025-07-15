#!/usr/bin/env bash
set -e # halt script on error

echo 'Testing local hugo jasonlaumeister.com WITHOUT drafts...'
hugo server --disableFastRender