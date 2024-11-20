// Handle form submission and store in localStorage
function submitVolunteerForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const role = document.getElementById("role").value;
    const message = document.getElementById("message").value;

    // Create application object
    const application = { name, email, phone, role, message, date: new Date().toLocaleString() };

    // Retrieve applications from localStorage or initialize an empty array
    const applications = JSON.parse(localStorage.getItem("volunteerApplications")) || [];
    applications.push(application);

    // Save updated applications array to localStorage
    localStorage.setItem("volunteerApplications", JSON.stringify(applications));

    // Clear the form and display a success message
    document.getElementById("volunteerForm").reset();
    alert("Thank you for applying to volunteer with us! Your application has been received.");
}
