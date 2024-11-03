let isLogin = true;

function switchAuth() {
    isLogin = !isLogin;
    document.getElementById("formTitle").textContent = isLogin ? "Login" : "Sign Up";
    document.getElementById("switchMessage").innerHTML = isLogin
        ? "Don't have an account? <span onclick='switchAuth()'>Sign up here</span>"
        : "Already have an account? <span onclick='switchAuth()'>Login here</span>";
}

function handleAuth(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (isLogin) {
        alert("Logged in as " + username);
    } else {
        alert("Account created for " + username);
    }
}
