# Shopping-Store網頁構建

## 此程式主要為javascript構建之作品,使用此專案能夠建一個屬於你的拍賣網站

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
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;網址前置為`'/shoppingstore/store'`,進入此線路  
       
      
      &ensp;&ensp;&ensp;&ensp;ShoppingmallManagementSystem.js:   
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;網址前置為`'/shoppingstore/controller'`,進入此線路  
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;負責後台運作,由後台人員確認並以此負責訂單狀況  
      
      &ensp;&ensp;&ensp;&ensp;store.js:   
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;網址前置為`'/shoppingstore/store'`,進入此線路  

      
負責進行前端的商城內的商店相關資料進行控制,創建賣家帳號、上架下架商店商品
及登入商店帳號都是此線路負責
shopping-store.js:
網址前置為此的,進入此線路
'/shoppingstore'
負責進行前端的商城主要功能,商城首頁、搜尋功能、我的最愛、購物車、商品購買
、購買紀錄都是在這個線路達成
users.js:
網址前置為此的,進入此線路
'/'
負責進行使用者(買家)登入、註冊、登出之功能,為使用者功能之路線
views: 放置動態html(ejs檔案),此專案所使用的html皆在這檔案
(以下為views資料夾內的檔案)
shopping-store資料夾: 放置前端商城的大部分html
web.ejs: 商城首頁的html

index.ejs: 商城搜尋後顯示商品頁面的html

show.ejs: 點及商品後,顯示商品頁面的html,能進行商品購買、收藏

shopcar.ejs: 負責顯示購物車頁面之html,並可進行確認購買或移除購物車

purchaseRecordlist.ejs: 負責查看購物紀錄頁面之html,能檢查商品狀況
狀況: 未出貨

狀況: 已出貨

lovelist.ejs: 顯示我的最愛頁面之html,GO能進入商品資訊,DELETE能從我的最愛刪除

layout資料夾: 放置負責進行整體布置的html
boilerplate.ejs: 
boilerplate2.ejs: 
boilerplate3.ejs: 

  1. 資料庫名稱: `practice-shopping-store`  
     `mongoose.connect('mongodb://127.0.0.1:27017/practice-shopping-store');`  
  2. 模組models  
     `Buyer.js` `commodity.js` `ControllerManagementSystem.js` `HotCommodity.js`  
     `OrderRecord.js` `PerchaseRecord.js` `Store.js` `User.js`  
       
     User : 用來創建用戶的模組  
     
     Buyer : 負責儲存買家資料的模組  
      
     Store : 負責儲存商家資料的模組  
     
     commodity : 負責儲存商品資料的模組  
     
     PerchaseRecord : 負責將儲存購物紀錄的模組  
     
     ControllerManagementSystem : 負責儲存後臺資料的模組  
     
     OrderRecord : 負責儲存購物紀錄、買家資料的模組  
     
     HotCommodity : 負責儲存商品及其熱門程度的資料的模組    

四、 網頁功能  
     執行網頁: `nodemon app.js`  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/38a1cef2-57fe-49ba-8930-f17816d5fa92)  

  1. 網站主頁: `http://localhost:2500/shoppingstore/web`  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/29b8ae0e-6f7f-4f3a-9727-df33d10588ac)  
     後台網址: `http://localhost:2500/shoppingstore/controller`  
  2. 搜尋功能:(ex:搜尋cloth)  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/7ea97672-cc9d-48a4-9184-07188fabb629)  
     顯示type為cloth商品  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/59f1403f-f10a-4946-8fc0-725027d1deed)  
    
  3. 用戶註冊: 註冊買家帳戶,點擊主頁的register  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/4dca8f0c-a7c5-486c-a636-d9901da69d65)  
     輸入username、email、password註冊買家帳戶  
      ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/edcf62f8-d94b-4c65-8a4d-eb7b6a236a54)  
     
  4. 登入功能:   
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/5ed5ca41-4bd9-4e4d-87ee-98ba8db011e7)  

  5. 購買流程:  
     選擇購買數量、型號,點擊Buy  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/59dd1c84-1553-488c-b2be-6f1a27f5c5e1)  
     點擊主頁的購物車  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/bc30723a-8e42-438f-bc4f-f616c345302b)  
     點擊確認購買  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/bf9e3434-f1b0-4393-8389-42588910d9b5)  
     資料會進入主頁的購買紀錄  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/dc0b53de-a964-4cf8-bc63-c93626c709ff)  
     狀態顯示未出貨  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/da33a4f5-7ae1-4940-8634-0be477dfd636)  
     由後臺控制出貨,後臺人員點擊確認出貨  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/a90fe68c-e81a-4c03-80c0-8663bea9d3aa)  
     點擊後,狀態會更新為已出貨  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/ee35cce6-b04b-456a-aec6-d2927a863271)  
     此時購買紀錄上狀態顯示已出貨,並確認是否收到貨物  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/fa62e77c-eda5-49ee-be01-7b356562b910)  
     點擊未收到貨物,後台會再次檢查並重新送出貨物  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/655db6b4-63d5-48b2-a9dd-053bf4b32eec)  
     點擊確認收到貨物則交易結束,後台可得知交易完成,並可以刪除交易紀錄  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/6501644a-c886-4166-ae6a-0d28e72f2b36)  
  
  6. 收藏功能  
     點擊Love按鈕  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/cd7763ff-2080-4c38-b6fe-50c41e70df49)  
     點擊主頁的收藏  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/42b2b1aa-04b6-40a8-afa9-ca7a1d0ab5d0)  
     會進入到收藏裡  
     ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/91937620-1ed8-4a1d-a36d-fdaedab0a97d)  
     





















   
