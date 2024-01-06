# 作品:購物網站

## 以javascript、css、html構建Shopping-Store網頁

###  環境   
1. 執行環境 : GitBash   
 &ensp;&ensp;1.1.  以Node.js執行javascript檔案  
 &ensp;&ensp;1.2.  資料庫使用MongoDB  
       
2. npm model模組  
     代碼: `npm i`  
      ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/4d31d7fd-00f8-433e-a397-8ef35f21a089)

### 一、應用
1. 網站功用:  
    &ensp;&ensp;1.1. 建置能實際執行的購物網站,並具備確實可實行性  
    &ensp;&ensp;1.2.  網站外貌與網路上可見網站並無過大差距  
    &ensp;&ensp;1.3.  實際具有登入、註冊,能記錄用戶資訊並確切使用此數據的功能  
    &ensp;&ensp;1.4.  在拍賣網站之數據(訂單、銷售紀錄)有後台之紀錄、操控  
  
 2. 功能列表        
 3. 後端說明    
 

### 二、使用技術  
  1. npm  (模組)  
     &ensp;&ensp;1.1 Express : 創造網頁構建之npm  
     &ensp;&ensp;1.2.  Ejs-mate: 使用之動態網站之npm  
     &ensp;&ensp;1.3.  Mongoose: 連接MongoDB資料庫之npm  
     &ensp;&ensp;1.4.  Passport: 完成登入之功能之npm
  2. DB  (資料庫)  
     &ensp;&ensp;2.1. MongoDB  
  3. Html (網站)  
     &ensp;&ensp;3.1. Ejs  
  4. Bootstrap  
     &ensp;&ensp;4.1. version  
     &ensp;&ensp;4.2. css  
  5. Node.js  
     &ensp;&ensp;5.1  伺服器  
  ### 三、專案說明  
   1. 專案:  
      &ensp;&ensp;&ensp;&ensp;此專案為構建購物網站之專案,能完成一般購物網站  
      &ensp;&ensp;&ensp;&ensp;之功能,在GitBash環境執行,以Node.js驅動js檔案,並  
      &ensp;&ensp;&ensp;&ensp;配合MongoDB的資料庫對數據進行控制,動態Html選  
      &ensp;&ensp;&ensp;&ensp;則使用Ejs進行動態網站  

   2. 檔案說明:  
      * seeds資料夾: 完成前置條件,及輸入預設數據置資料庫    
      &ensp;&ensp;&ensp;&ensp;(以下為seeds資料夾內的檔案,依序為執行順序)  
      &ensp;&ensp;&ensp;&ensp;index.js: 執行後台前置條件,以ControllerManagementSystem    
                     &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;模板創建控制後台的控制變數controllerSystem,(此變數為控制    
                     &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;後台資料之變數)    
           &ensp;&ensp;&ensp;&ensp;seed.js: 將預設好的商品存入資料庫,使資料庫存在商品資料    
           &ensp;&ensp;&ensp;&ensp;store.js: 將商品定為預設商店之商品  
        
      * app.js : 啟動網站之檔案,執行app.js網頁即位在localhost:2500打開,  
              可用瀏覽器執行,會根據網址執行Route資料夾裡的不同檔案  
              
      * models資料夾: 裡面放置DataBase數據的各模版資料  
      &ensp;&ensp;&ensp;&ensp;User.js : 用來創建用戶的模組  
      &ensp;&ensp;&ensp;&ensp;Buyer.js : 負責儲存買家資料的模組  
      &ensp;&ensp;&ensp;&ensp;Store.js : 負責儲存商家資料的模組  
      &ensp;&ensp;&ensp;&ensp;commodity.js : 負責儲存商品資料的模組  
      &ensp;&ensp;&ensp;&ensp;PerchaseRecord.js : 負責將儲存購物紀錄的模組  
      &ensp;&ensp;&ensp;&ensp;ControllerManagementSystem.js : 負責儲存後臺資料的模組  
      &ensp;&ensp;&ensp;&ensp;OrderRecord.js : 負責儲存購物紀錄、買家資料的模組  
      &ensp;&ensp;&ensp;&ensp;HotCommodity.js : 負責儲存商品及其熱門程度的資料的模組  
           
      * routes資料夾: 裡面存放不同網址(線路)執行之檔案
        * ShoppingmallManagementSystem.js:  
         &ensp;&ensp;&ensp;&ensp;網址前置為`'/shoppingstore/controller'`,進入此線路  
         &ensp;&ensp;&ensp;&ensp;負責後台運作,由後台人員確認並以此負責訂單狀況  
             
        * store.js:  
        &ensp;&ensp;&ensp;&ensp;網址前置為`'/shoppingstore/store'`,進入此線路     
        &ensp;&ensp;&ensp;&ensp;負責進行前端的商城內的商店相關資料進行控制,創建賣家帳號、上架下架商店商品  
        &ensp;&ensp;&ensp;&ensp;及登入商店帳號都是此線路負責  
  
        * shopping-store.js:  
        &ensp;&ensp;&ensp;&ensp;網址前置為此的,進入此線路  
        &ensp;&ensp;&ensp;&ensp;`'/shoppingstore'`  
        &ensp;&ensp;&ensp;&ensp;負責進行前端的商城主要功能,商城首頁、搜尋功能、我的最愛、購物車、商品購買  
        &ensp;&ensp;&ensp;&ensp;、購買紀錄都是在這個線路達成  

        * users.js:
        &ensp;&ensp;&ensp;&ensp;網址前置為此的,進入此線路  
        &ensp;&ensp;&ensp;&ensp;`'/'`  
        &ensp;&ensp;&ensp;&ensp;負責進行使用者(買家)登入、註冊、登出之功能,為使用者功能之路線  

      * views: 放置動態html(ejs檔案),此專案所使用的html皆在這檔案
      &ensp;&ensp;&ensp;&ensp;(以下為views資料夾內的檔案)
        * shopping-store資料夾: 放置前端商城的大部分html
          * web.ejs: 商城首頁的html
            ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/aa0761f0-3552-4752-90ae-4a8bbdd1bf91)

          * index.ejs: 商城搜尋後顯示商品頁面的html
            ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/0a8040c0-10c8-4ecd-9020-0796c1d91d92)

          * show.ejs: 點及商品後,顯示商品頁面的html,能進行商品購買、收藏
            ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/af345769-522d-4bb4-87a3-a5a98cb8102b)

          * shopcar.ejs: 負責顯示購物車頁面之html,並可進行確認購買或移除購物車
            ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/cd6f4ece-bd9b-4c1e-ae05-f0c4bfe9b408)

          * purchaseRecordlist.ejs: 負責查看購物紀錄頁面之html,能檢查商品狀況  
            &ensp;&ensp;&ensp;&ensp;狀況: 未出貨  
            ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/e468dcbb-8dcf-4f41-bbc5-8cbc89c4e55f)  

            &ensp;&ensp;&ensp;&ensp;狀況: 已出貨  
            ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/4912c8d5-1f66-4491-95e9-b92cee03896b)

  
          * lovelist.ejs: 顯示我的最愛頁面之html,GO能進入商品資訊,DELETE能從我的最愛刪除  
            ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/333e5cd5-398a-40de-ba44-81830c98090e)


      * layout資料夾: 放置負責進行整體布置的html
        * boilerplate.ejs 
        * boilerplate2.ejs 
        * boilerplate3.ejs

   ### 四、流程  
   1. 預先安裝:  
     &ensp;&ensp;需先下載GitBash、Node.js、MongoDB及使用之NPM模組
   2. 前置設定:  
     &ensp;&ensp;需先執行seeds資料夾之檔案,將預設商品、商店及後台資料進行預設  
     &ensp;&ensp;以下為seeds資料夾檔案執行順序  
        
     1. index.js: 進行後台設置  
     &ensp;&ensp;2. seed.js: 將預設商品數據導入資料庫  
     &ensp;&ensp;3. store.js: 將資料庫商品輸入預設商店   
   4. 執行app.js檔案:  
     &ensp;&ensp;執行app.js檔案，開始啟動商店網站,以瀏覽器`localhost:2500/shoppingstore/web`  
     &ensp;&ensp;打開網站，進行網站操作  
   5. 後台
     &ensp;&ensp;以瀏覽器`localhost:2500/shoppingstore/controller`打開網站後台，負責查看目前  
     &ensp;&ensp;訂單，以及進行出貨設定  
   6. 流程圖  
      ![流程圖](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/ec8afc37-9f77-4cb8-a8cb-b1e3f8f1a0eb)

     



















   
