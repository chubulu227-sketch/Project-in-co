document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const responseElement = document.getElementById("response");

  try {
    const res = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    responseElement.textContent = data.message;
    responseElement.style.color = "green";
  } catch (error) {
    responseElement.textContent = "Error sending message.";
    responseElement.style.color = "red";
  }
});
