# Shopping-Store網頁構建

## 此程式主要為javascript構建之作品,使用此專案能夠建一個屬於你的拍賣網站

一、 前置動作  
 1. 下載全部檔案  
 2. 下載npm model模組  
     代碼: `npm i`  
      ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/4d31d7fd-00f8-433e-a397-8ef35f21a089)

二、 開始構建網站  
 1. 執行環境: `Gitbash` ,用`Node`執行js檔案,資料庫使用`mongoDB`      
 2. 執行seeds資料夾的檔案  
     2-1. 執行seeds資料夾裡的seed2.js  
     2-2. 執行seeds資料夾裡的index.js    
     2-3. 執行seeds資料夾裡的store.js  
    ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/1220dd7e-d693-4261-bcce-beccfed6b4c8)  
    ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/01a0b8ab-ea16-499a-a29e-fef7fe607e95)  
     (執行seed2.js會儲存預設的商品進入資料庫,執行index.js則是為了後台的設置,執行store.js會儲存預設的商店)    

三、 程式介紹  
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
     








   
