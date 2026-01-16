const submit_btn = document.getElementById("submit");

submit_btn.addEventListener("click", () => {
    console.log("login");
    //ctrl + D
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    // username=ahmad2017 , password=integrity
    if(username === "ihsan" && password == "Nurul Fikri") {
        window.location.href = "home.html";
        alert("Login Berhasil")
    } else {
        alert("Login Gagal");
    }
    })