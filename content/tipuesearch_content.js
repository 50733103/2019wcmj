var tipuesearch = {"pages": [{'title': '第一頁', 'text': '我的第一個javascript程式 \n \n \n 按一下 \n \n \n \n <p><button onclick="myFunction()">Try it</button></p>\n<p id="demo"></p>\n<script>// <![CDATA[\nfunction myFunction() {\n\xa0\xa0document.getElementById("demo").innerHTML = Math.floor(Math.random()*10);\n}\n// ]]></script> \n \n', 'tags': '', 'url': '第一頁.html'}, {'title': '學習概要', 'text': '能夠學習到如何配置網路連線設定到CMSimfly的動靜態網路編輯及學習如何利用電腦與網路系統自行架構網際內容管理架構系統 \n 有利用github,Blogger以及CMSimfly來協助課程的進行 \n \n', 'tags': '', 'url': '學習概要.html'}, {'title': '期中報告', 'text': '\n \n 1.先建立出自己的一個github倉儲 \n 2.git clone出github及CMSimfly並將兩個資料夾合併(除了.git以及README.md以外) \n 3.git add .再commit及push \n 4.輸入https://倉儲名.github.io/2019wcmj即可到達靜態網站 \n 5.輸入 python wsgi.py後可達到動態網站並編輯 \n 6.編輯完後利用git add,commit及push來推送到靜態網站 \n', 'tags': '', 'url': '期中報告.html'}, {'title': '一個簡單的小遊戲', 'text': "\n \n \n  Your browser doesn't support the HTML5 element canvas.      Throw dice  \n Stage:   Point:   Outcome:  \n", 'tags': '', 'url': '一個簡單的小遊戲.html'}, {'title': '期末報告', 'text': 'windows network setting \n chrome proxy \n \n \n firefox proxy \n mde.tw \n \n github.com \n \n portable programming system \n portablegit - remove helper = manager \n login github add repository - README.md \n git clone\xa0 self-repo and CMSimfly \n y:\\home\\.gitconfig \n git config --global user.name "50733103" git config --global user.email "50733103@gm" git config --global http.proxy \xa0 http://140.130.17.3:3128 \n \n git add . \n git commit -m "commit description" \n git push \n \n Github Pages - setting, url \n local python wsgi.py \n \n ssh vs https (y:\\home\\.ssh\\config) \n .git/config (url = \xa0 git@github.com:scrum-4/2019wcmj.git ) \n', 'tags': '', 'url': '期末報告.html'}, {'title': '網路連線設定', 'text': '了解機械設計系電腦輔助設計室電腦的網路設定, 其中包括 IPv4 網路與 IPv6 網路設定. 正常情況下, 電腦輔助設計室中的 64 台電腦透過 IPv4 協定下的 DHCP 與 NAT 上網, 各電腦以 DHCP client 取得 192.168.1.* 的網路位址, 然後以 NAT 的一組外部 IP 上網, 通常必須設定 Proxy Server 為 http://proxy.kmol.info:3128 後上網會比較順暢, 但若 8 台 Proxy Servers 無法正常運作時, 則取消 Proxy Server 的設定. 瀏覽器代理主機設定 了解如何設定 Google Chrome 與 Firefox 瀏覽器的代理主機設定. 申請 Github 帳號 利用 Gmail 帳號申請 Github 帳號, 申請後利用電子郵箱收信進行確認後, 就可以在 Github 上建立倉儲. \n', 'tags': '', 'url': '網路連線設定.html'}, {'title': '配置可攜程式環境', 'text': '取得 Windows 10 64 位元環境下的可攜程式環境 (下載\xa0 2019_cdb_w5.7z), 下載後解開目錄, 放入 USB3.0 規格以上的隨身碟或隨身硬碟. 以滑鼠點擊 start.bat 開啟可攜隨身系統, 以 stop.bat 關閉可攜隨身系統, 隨身碟必須在關閉所有應用程式執行下, 才可正常退出. 了解基本的 DOS (Disk Operating System) 指令 C:\\> 符號為 DOS 命令列視窗的回應 (Prompt), 表示目前在 C 槽硬碟的 \\ 根目錄, 若要切換到 Y 槽, 則在電腦的回應後, 輸入 Y:, 命令列將轉為 Y:\\> 若要更換目錄, 則使用 cd, 也就是 change directory 的意思, 例如: Y:\\>cd tmp 表示要從 Y 槽的根目錄更換到 tmp 目錄, 也就是 Y:\\tmp> 若要再回到 Y 槽的根目錄, 可以使用 cd .. 表示要從目前所在目錄, 往上跳回一個目錄, 也就是重新回到 Y 槽的根目錄. 另外, 無論目前位於哪一個子目錄, 也可以使用 cd \\ 直接回到根目錄. 或者從 Y:\\> 直接使用 cd \\tmp\\repo\\ssh\\wcm2019 直接從 Y 槽的根目錄, 跳進 Y:\\tmp\\repo\\ssh\\wcm2019> 此外, 常用的 DOS 指令有: dir - 列出目前所在目錄的內容 mkdir - 隨後加上要建立目錄的名稱, 可以建立目錄 cls - clear screen, 清除目前的命令列顯示的內容 \n', 'tags': '', 'url': '配置可攜程式環境.html'}, {'title': '倉儲改版', 'text': '建立 Git 倉儲, 並 clone 倉儲至近端工作後, 對遠端倉儲改版 可攜程式系統中已經內建 git, 可以在啟動 start.bat 後, 透過 path 的設定, 直接執行 git 指令. 建立 Git 倉儲, 共分為兩類, 一類是直接在 Github 網際介面下建立倉儲時, 要求建立 README.md 檔案, 之後可以直接在近端, 以 git clone 加上倉儲連線 URL, 將倉儲克隆一份到近端, 並以最新版本作為工作目錄, 使用者改版後, 可以直接透過 git add, commit 與 push 對遠端倉儲改版. 另一類則是故意在 Github 網際介面下建立倉儲時, 不要建立任何檔案, 而是在近端自行利用 git 指令建立倉儲架構, 新增內容後, 以 git remote add 設法在近端倉儲中納入 origin URL 後, 將近端倉儲版本新增提交推送到遠端. git add (在近端,無需proxy) git add 可以用來新增一個檔案, 數個檔案, 或在之前提交後所新增的所有內容. git add 在 GIT 架構下, 是對所新增或修改的內容 拍快照 : git add . adds all modified and new (untracked) files in the current directory and all subdirectories to the staging area (a.k.a. the index), thus preparing them to be included in the next git commit . Any files matching the patterns in the .gitignore file will be ignored by git add git commit \xa0 (在近端,無需proxy) git commit 執行之前, 必須 使用 git config 建立臨時或永久的身分註記 , 因為 GIT 在展開所有改版內容時, 必須明確登錄這些變更的作者與時間. 當使用者採用 git commit -m "改版說明訊息", 此次提交到 .git 目錄下的更動內容, 均會綁定使用者身分與改版所輸入的說明訊息. git push (用何協定是由倉儲" .git"內的config的url所決定的) git push 在隨後沒有輸入遠端 URL 代號時, 表示要推送到 origin, 若透過 git remote add 設定其他代號與 URL 對應時, git push 加上代號, 就可以將此次的提交內容, 推送到指定的 URL 所在遠端倉儲. \n 靜態 CMSimfly \n 利用 CMSimfly (https://github.com/chiamingyen/cmsimfly) 內容, 建立自己的 Github Pages 網站 設法利用 \xa0 HTML5 CSS 與 Javascript , 納入與機械設計相關的靜態網頁內容', 'tags': '', 'url': '倉儲改版.html'}, {'title': '資料來源', 'text': 'http://cpgx.kmol.info/wcm2019/content/index.html \n', 'tags': '', 'url': '資料來源.html'}, {'title': 'ROC Flag', 'text': '\n  導入 Brython 標準程式庫  \n \n \n \n  啟動 Brython  \n \n \n \n 繪圖 <<  Previous   Next  >> Spur Gears \n \n \n \n \n \n W14 <<  Previous \n \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.   Copyright ©\n \nAll rights reserved | This template is made with   by  Colorlib    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n  for site wrap  \n \n  <script src="../static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n <!-- \n \n \n', 'tags': '', 'url': 'ROC Flag.html'}, {'title': 'W15虎科大VPN設定', 'text': '安裝完並開啟SSL VPN程式(Juniper Networks Connect \n 點擊Network Connect \n \n 執行程式後,於登入頁面輸入網址 \n \n 輸入使用者帳密(填入校務行政AD及密碼) \n \n 出現"設定控制-警告"視窗,按下"是" \n \n 螢幕右下角顯示"已連接" 表示已成功連線 \n \n 請在IE瀏覽器上按下右鍵 使用"以系統管理員身分執行" IE網認證:在IE瀏覽器上按下右鍵 使用"以系統管理員" 登入頁面輸入： https://sslvpn9.twaren.net/nfu，按下「執行」，會出現帳號與密碼登入欄位。 填入虎尾科技大學的校務行政AD帳號及密碼，並請輸入下方驗證碼，進行身份確認。 填寫您在虎尾科技大學的校務行政AD帳號以及密碼 填寫完畢以後按下Login登入就會開始進行身份確認，請稍後一段時間。 \n \n \n \n 以上的資訊皆來自 https://nfucc.nfu.edu.tw/index.php/zh/download/download-network/ssl-vpn \n', 'tags': '', 'url': 'W15虎科大VPN設定.html'}]};