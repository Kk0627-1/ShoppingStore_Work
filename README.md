# Shopping-Store網頁構建

## 此程式主要為javascript構建之作品,使用此專案能夠建一個屬於你的拍賣網站

###  環境  
1. 執行環境 : GitBash   
 1.1.  以Node.js執行javascript檔案  
 1.2.  資料庫使用MongoDB  
     
 3. 下載npm model模組  
     代碼: `npm i`  
      ![image](https://github.com/Kk0627-1/ShoppingStore_Work/assets/55129180/4d31d7fd-00f8-433e-a397-8ef35f21a089)

### 一、應用
1. 網站功用:  
    1.1. 建置能實際執行的購物網站,並具備確實可實行性  
   
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
     





















   
