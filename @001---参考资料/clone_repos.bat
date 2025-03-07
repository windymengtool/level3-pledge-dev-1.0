@echo off
echo deleting old folders...

:: 第一部分：删除现有仓库文件夹
rmdir /s /q Pledge 2>nul
rmdir /s /q pledge-backend 2>nul
rmdir /s /q pledge-fe 2>nul
rmdir /s /q pledgev2 2>nul

echo Cloning repositories...

:: 第二部分：克隆仓库
git clone git@github.com:ProjectsTask/Pledge.git
git clone git@github.com:ProjectsTask/pledge-backend.git
git clone git@github.com:ProjectsTask/pledge-fe.git
git clone git@github.com:ProjectsTask/pledgev2.git

echo Cleaning .git folders...

:: 第三部分：删除 .git 文件夹
rmdir /s /q Pledge\.git
rmdir /s /q pledge-backend\.git
rmdir /s /q pledge-fe\.git
rmdir /s /q pledgev2\.git

echo Done!
pause 