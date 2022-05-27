import axios from "axios";
//import toast from "react-hot-toast";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/user/login", {
      email,
      password,
    });
    const { data, message, success } = res.data;
    console.log(data)

  
  } catch (error) {
    console.log(error);
   
    };
  }
};

