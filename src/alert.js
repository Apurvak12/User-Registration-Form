import Swal from "sweetalert2";

function Popup() {
  const firstName = document.getElementById('first-name')?.value.trim();
  const lastName = document.getElementById('last-name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const password = document.getElementById('password')?.value.trim();
  const address = document.getElementById('address')?.value.trim();

  if (!firstName || !lastName || !email || !password || !address) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please fill all the fields!",
    });
  } else {
    Swal.fire({
      title: "Thank You!",
      text: "Your form is submitted successfully!",
      icon: "success"
    });
  }
}

export default Popup;
