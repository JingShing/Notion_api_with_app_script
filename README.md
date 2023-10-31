English | [繁體中文](README_TCH.md)
# Notion_api_with_app_script
A simple note for using notion api with app script.

# Why this repo created?
Recently I got a mission to write the code about notion api on google app script.

It is not a good experience reading notion api manual. Since it was update its syntax recently.(I totally ruined the OAuth2.0 on it, and wasted much of my time.)

In fact, It is a torture.(There are few tutorial or instance to learn. You can only read the outdated manual or code)

So, I wrote this repo to help someone like me to keep your time from this horrible api thing.

BTW, I think this time I am doing a great job on commnet in the code.

# Before started
* You may need a notion account.(from register or rent one.)
* You may need to create a integration from [notion developer](https://developers.notion.com/)
  * It will generate a ```integration token``` for you.(This is important, save it carefully)
  * And you need to give integration some of capabilities of writing, reading or inserting.(Depending on what you want to do)
* Finally, you will need a database to run script on. Exactly, you only need the database id.
> Database id can be get on your database webpage. On the url-> ```https://www.notion.so/{database_id}?v={nothing_to_do}```

# How to use api?
* In the [example script](example/main.gs), put the token and database id in the const.
* Run the script on app script.
* In the example it will show all the object on your database.
* Done!

# Just try and modify for yourself!
