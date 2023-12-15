const togglePasswordVisibility = () => {
    const passwordInput = document.querySelector("#password");
    const toggleBtn = document.querySelector("#toggleBtn");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleBtn.innerHTML = '<i class="far fa-eye"></i>'; 
    } else {
      passwordInput.type = "password";
      toggleBtn.innerHTML = '<i class="far fa-eye-slash"></i>';
    }
  };