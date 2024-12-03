const passwordEl = document.querySelector("#password");
const formEl = document.querySelector(".login-form");

// login functionality?

formEl.addEventListener("submit", async (e) => {
	e.preventDefault();
	const user = document.querySelector(
		'input[name="user-select"]:checked'
	).value;
	const password = passwordEl.value;
	try {
		await axios.post("api/v1/auth/login", { user, password });
	} catch (error) {}
});
