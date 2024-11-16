const form = document.getElementById('detailsForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    const requestBody = { name, email, message };

    try {
        const response = await fetch('http://localhost:3001/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const result = await response.json();
        
        if (result.success) {
            alert('Details submitted successfully!');
            form.reset();
        } else {
            alert(`Error: ${result.message || 'Unknown error occurred'}`);
        }
    } catch (err) {
        console.error('Error during request:', err);
        alert('An error occurred. Please try again later.');
    }
});
