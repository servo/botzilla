#!/bin/bash
sed -e "s/{{ACCESSTOKEN}}/$RIOT_ACCESS_TOKEN/" -e "s/{{STANDUPSSECRET}}/$STANDUPS_SECRET/" <config.json.base >config.json
npm start
