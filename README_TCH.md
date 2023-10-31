[English](README.md) | 繁體中文
# Notion_api_with_app_script
一個用於紀錄 app script 和 notion api 串接的筆記。

# 為什麼要寫這篇筆記？
最近我的一份工作內容和 notion api 調用有關，而語言是 javascript，平台是 app script。

閱讀 notion api 手冊並不是一個很好的經驗。 最近 notion api 的部分語法有更新。(我浪費了一些時間在嘗試 app script 上用 Oauth2.0 接上 notion，並完全搞砸了)

In fact, It is a torture.(There are few tutorial or instance to learn. You can only read the outdated manual or code)

So, I wrote this repo to help someone like me to keep your time from this horrible api thing.

BTW, I think this time I am doing a great job on commnet in the code.

# Before started
* You may need a notion account.(from register or rent one.)
* You may need to create a integration from [notion developer](https://developers.notion.com/)
  * It will generate a ```integration token``` for you.(This is important, save it carefully)
  * And you need to give integration some of capabilities of writing, reading or inserting.(Depending on what you want to do)
* Finally, you will need a database to run script on. Exactly, you only need the database id.
> Data base id can be get on your database webpage. On the url-> ```https://www.notion.so/{database_id}?v={nothing_to_do}```
