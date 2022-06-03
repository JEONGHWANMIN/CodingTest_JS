#!/bin/bash
echo "##### PUSH START : $(date +%Y)-$(date +%m)-$(date +%d) $(date +%H):$(date +%M):$(date +%S) #####"

cd ~/ml/Algorithm 
git add .
git status
git commit -m "git commit auto push"
git push auto master

echo '##### AUTO PUSH END #####'
