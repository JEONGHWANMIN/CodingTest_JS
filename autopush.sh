#!/bin/bash
echo '##### auto push start #####'

cd ~/ml/Algorithm 
git add .
git status
git commit -m "git commit auto push"
git push 

echo '##### auto push end #####'
