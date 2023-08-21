
PAGE=ftp://ftp.wangnelson.xyz 
THIS_BRANCH=master
MASTER_BRANCH=master
DEPLOY_BRANCH=deployment
FTP_HOST=wngnelson.com
FTP_USER=u851203827.abindistr.com
FTP_PASSWORD=Admin123

main: update-data build-commit ft-push

update-data:
	curl "https://food-admin.wangnelson.xyz/public/api/products" > ./src/pages/shop/product/data.json

build-commit:
	yarn run build
	yarn run export
	git add --all
	git commit -m "Production update | ${v}"	
	git push origin HEAD

build-commit-donpush:
	yarn run build
	yarn run export
	git add --all
	git commit -m "Production update "

cap:
	git coa "${m}"
	git poh

   
# wangafhu, same password Darkarior448!

# If the workflow is not working for some reason
merp:
	git checkout ${DEPLOY_BRANCH}
	git pull
	git merge ${THIS_BRANCH}
	make ft-configpush
	git push origin HEAD
	git checkout ${THIS_BRANCH}

merge-to-deployment:
	git checkout ${DEPLOY_BRANCH}
	git pull
	git merge ${THIS_BRANCH}
	git push origin HEAD
	git checkout ${THIS_BRANCH}

mastermerge-deployment:
	git checkout ${MASTER_BRANCH}
	git pull
	git merge ${THIS_BRANCH}
	git push origin HEAD
	git checkout ${DEPLOY_BRANCH}
	git pull
	git merge ${MASTER_BRANCH}
	git push origin HEAD
	git checkout ${THIS_BRANCH}

ft-push:
	git ftp push 
	echo "open in ${PAGE}" && git log -n 2
	
ft-configpush:
	git config git-ftp.url ftp.${FTP_HOST}
	git config git-ftp.user ${FTP_USER}
	git config git-ftp.password ${FTP_PASSWORD}
	git config git-ftp.syncroot out/
	git ftp push --force


ftpinit:
	git config git-ftp.url ftp.${FTP_HOST}
	git config git-ftp.user ${FTP_USER}
	git config git-ftp.password ${FTP_PASSWORD}
	git config git-ftp.syncroot out/

first-deploy:
	make ftpinit
	git ftp init