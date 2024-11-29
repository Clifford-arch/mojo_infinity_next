// api/logout.js
import axios from "axios";

const logout = async () => {
  const url = "https://sandboxwealth-frapi.mojoinfinity.com/users/logout";

  try {
    // const response = await axios.post(
    //   url,
    //   {
    //     code: 200,
    //     message: "success",
    //     data: {},
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     withCredentials: true,
    //   }
    // );
    // return response.data;
    const response = await axios.get(
      url,
      {
        code: 200,
        message: "success",
        data: {},
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    // console.error("Logout failed:", error);
    throw error;
  }
};

export default logout;
