import sendRequest from "./send-request";
const BASE_URL = 'https://shopflix-api.onrender.com/api/list';

export async function addList(items) {
  return sendRequest(BASE_URL,'POST',{items})
}
export async function getList() {
    return sendRequest(BASE_URL,'GET')
  }
  export async function removeItem(itemId) {
    return sendRequest(`${BASE_URL}/delete/${itemId}`,'PUT')
  }