import axios from "axios";

const URL = "https://connections-api.herokuapp.com/";

export default async function getApi() {
  const { data } = await axios.get(`${URL}`);
  return data;
}
