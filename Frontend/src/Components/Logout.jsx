import React from "react";

class LogoutButton extends React.Component {
  handleLogout = async () => {
    try {
      // Remove JWT token from local storage
      localStorage.removeItem("token");
      window.location.href = "/";

      // Make a request to your backend to logout
      // const response = await fetch("http://localhost:8000/users/logout", {
      //   method: "POST", // or 'GET' depending on your backend route configuration
      //   headers: {
      //     "Content-Type": "application/json",
      //     // You might need to include additional headers for authorization if required by your backend
      //     Authorization: `Bearer ${localStorage.getItem("token")}`, // Sending the JWT token for authentication
      //   },
      // });

      // if (response.ok) {
      //   // Redirect to home page
      //   window.location.href = "/";
      // } else {
      //   // Handle error response from the backend if needed
      //   console.error("Logout failed");
      // }
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  render() {
    return (
      <>
        <div className="h-screen bg-[#CCDDFF] flex items-center justify-center">
          <button
            onClick={this.handleLogout}
            className="bg-[#5863C4] px-8 py-2 text-white rounded-lg"
          >
            Logout
          </button>
        </div>
      </>
    );
  }
}

export default LogoutButton;
