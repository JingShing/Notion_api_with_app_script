[English](README.md) | 繁體中文
# Notion_api_with_app_script
一個用於紀錄 app script 和 notion api 串接的筆記。

# 為什麼要寫這篇筆記？
最近我的一份工作內容和 notion api 調用有關，而語言是 javascript，平台是 app script。

閱讀 notion api 手冊並不是一個很好的經驗。 最近 notion api 的部分語法有更新。(我浪費了一些時間在嘗試 app script 上用 Oauth2.0 接上 notion，並完全搞砸了)

實話而言，這個經歷談不上好。(網上的教學和實例比較少，大多數都已經過期，已經無法使用)

我寫此篇筆記，為了和我有共同經歷，一樣在翻閱教學和手冊的人們，有一個更好閱讀的範例和參考。

順帶一提，

# 開始之前
* 首先，需要準備一個 notion 的帳號(可以註冊，或是借一個)
* 需要先從 [notion developer](https://developers.notion.com/) 創立 integration
  * 創立後，會產生專屬的 ```integration token```(這個很重要，請仔細保存)
  * 會需要提供 integration 一些權限，如： 寫入、閱讀和插入(取決於你需要那些功能)
* 最後，會需要一個資料庫，來跑腳本，需要提前準備好 資料庫id(database id)
> 資料庫id(database id) 可以從資料庫的網址中取得 -> ```https://www.notion.so/{database_id}?v={nothing_to_do}```
