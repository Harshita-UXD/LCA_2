function toggleForm(view) {
    const login = document.getElementById("login-panel");
    const signup = document.getElementById("signup-panel");
  
    if (view === "signup") {
      login.style.display = "none";
      signup.style.display = "flex";
    } else {
      signup.style.display = "none";
      login.style.display = "flex";
    }
  }
  