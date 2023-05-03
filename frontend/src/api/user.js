import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function loginUser(email, password, setLoggedIn, setLoggedInUser, navigate) {
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("login getting called");

  try {
    const postResponse = await axios.post(
      `${API_BASE_URL}/api/user/login`,
      { email, password },
      { withCredentials: true }
    );

    if (postResponse.status === 200) {
      const user = postResponse.data.user;
      setLoggedIn(true);
      setLoggedInUser(user);
      sessionStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate(postResponse.data.redirect);
    } else {
      throw new Error(postResponse.data.message);
    }
  } catch (error) {
    console.error("Error in loginUser:", error);
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Unable to connect to the server.");
    }
  }
}

export async function logoutUser(setLoggedIn, setLoggedInUser, navigate) {
  console.log("logout getting called");
  try {
    const response = await axios.get(`${API_BASE_URL}/api/user/logout`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      setLoggedIn(false);
      setLoggedInUser(null);
      sessionStorage.removeItem('loggedInUser');
      navigate(response.data.redirect);
    }

    return response;
  } catch (error) {
    console.error("Error in logoutUser:", error);
    return null;
  }
}