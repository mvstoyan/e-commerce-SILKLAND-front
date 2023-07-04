const rootUrl = "https://e-commerce-silkland.onrender.com";

// Function to handle user registration
export const handleRegister = async (user) => {
  try {
    const url = `${rootUrl}/api/v1/auth/register`; // API endpoint for user registration
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), // Converts the user object to JSON and sends it as the request body
    });

    if (response.ok) {
      console.log("Registration successful"); // If the response is successful (status 200-299), log a success message
      return true; // Return true to indicate successful registration
    } else {
      console.log("Registration failed"); // If the response is not successful, log a failure message
      return false; // Return false to indicate failed registration
    }
  } catch (error) {
    console.log(error); // Log any errors that occur during the registration process
    return false;
  }
};

export const handleLogin = async (user) => {
  try {
    const url = `${rootUrl}/api/v1/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      console.log("Login successful");
      return true;
    } else {
      console.log("Login failed");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const handleLogout = async () => {
  try {
    const url = `${rootUrl}/api/v1/auth/logout`;
    const response = await fetch(url);

    if (response.ok) {
      console.log("Logout successful");
      return true;
    } else {
      console.log("Logout failed");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
