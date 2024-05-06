import postData from "./postData";

const postLogin = ({ data }) =>
  postData({ endpoint: "api/user/auth", data: data, config: null });

export default postLogin;
