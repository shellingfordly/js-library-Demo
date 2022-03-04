#! /bin/bash

git stash save 'backup'

# 获取当前分支名称
function git.branch {
  br=`git branch | grep "*"`
  echo ${br/* /}
}
branch=`git.branch`

git reset --hard origin/$branch

git pull

git stash pop

git add .

git commit -m $1 --no-verify

git pull

git push origin $branch:refs/for/$branch
