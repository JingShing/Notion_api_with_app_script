/**
 * If you are the first time using google app script
 * -> choose the main function(this will near to the debug button) 
 * -> and just click 'run' button to see the result.
 * 
 * Note:
 * Remember to put your token and database id right to make script work.
 */

/**
 * - Script Goal: 
 *   1. Know how to use notion api with google app script.
 *   2. Get the response from notion by using api request
 *   3. Process the response data, get the part you need to 
 *   make things right.
 * 
 * - Script Mechanic:
 *   1. Using request to get notion api object.
 */

/**
 * # google app script:
 * 
 * # script limit:
 * https://developers.google.com/apps-script/guides/services/quotas?hl=zh-tw
 * 
 * Common limit:
 * 1. app script should be under 6min/run
 * 2. app script run time total <= 90mins/day
 * 3. calendar event should be under 5000/day
 * 
 * # Property:
 * https://developers.google.com/apps-script/guides/properties?hl=en
 */

/** 
 * # how to fix outdated 
 * if the script outdated, here are some website can help to fixed it:
 * # api problems
 * 1. notion api reference: https://developers.notion.com/reference
 * # header outdated
 * 1. notion version: https://developers.notion.com/reference/versioning
 * # google calendar api
 * 1. google calendar api reference: https://developers.google.com/apps-script/reference/calendar/calendar?hl=zh-tw
 */

// this script only trigger when mission got edited

// database id
// how to get it?
// -> https://www.notion.so/{database_id}?v={nothing_important}
const DATABASE_ID = '...';

// integration token
// right: please give integration the right to read data
// warning: remember to add in the database component
const NOTION_TOKEN = '...';

function main() {
  // this line is to send request to get response
  var response_data = getResponse(DATABASE_ID);

  // let's see what's inside the response
  console.log(response_data)

  // special function to show the response:
  displayResponse(DATABASE_ID);
}

// give id to get response data
function getResponse(id) {
  const url = getDatabaseURL(id);
  const payload = {
    sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
  };
  var response_data = notionApiRequest(url, payload, "POST");
  return response_data;
}

// show the response contents
function displayResponse(id) {
  const url = getDatabaseURL(id);
  const payload = {
    sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
  };
  var response_data = notionApiRequest(url, payload, "POST");
  console.log(response_data);
}

function notionApiRequest(url, payload_dict, method = "POST") {
  // UrlFetchApp is sync even if async is specified
  let options = {
    method: method,
    headers: getNotionHeaders(),
    muteHttpExceptions: true,
    ...(payload_dict && { payload: JSON.stringify(payload_dict) }),
  };

  const response = UrlFetchApp.fetch(url, options);

  if (response.getResponseCode() === 200) {
    const response_data = JSON.parse(response.getContentText());
    if (response_data.length == 0) {
      throw new Error(
        "No data returned from Notion API. Check your Notion token."
      );
    }
    return response_data;
  } else if (response.getResponseCode() === 401) {
    throw new Error("Notion token is invalid.");
  } else {
    throw new Error(response.getContentText());
  }
}

// notion version need to be update periodly
// more detailed on the top, can been found in how to fix outdated area.
function getNotionHeaders() {
  return {
    Authorization: `Bearer ${NOTION_TOKEN}`,
    Accept: "application/json",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
  };
}

function getDatabaseURL(id) {
  return `https://api.notion.com/v1/databases/${id}/query`;
}
