import postData from "./postData";

const postRegister = ({ data }) =>
  postData({ endpoint: "api/guest/register", data: data, config: null });

export default postRegister;
