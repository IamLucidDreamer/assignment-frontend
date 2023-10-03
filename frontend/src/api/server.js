import axios from "axios";

const serverV1 = axios.create({
  baseURL: "http://localhost:8002/api/v1",
  timeout: 60000,
});

export default serverV1;
