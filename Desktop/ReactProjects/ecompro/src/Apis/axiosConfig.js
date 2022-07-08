
import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost/api/v1/",
  timeout: 5000 * 5// Wait for 5 seconds
//   headers: { "X-Custom-Header": "foobar" },
});

export default Axios;
