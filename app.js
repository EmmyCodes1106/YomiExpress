document.getElementById('myForm')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(this);

        // Send form data to Formspree
        fetch('https://formspree.io/f/xnnaejdk', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                if (response.ok) {
                    alert('Form submitted successfully!');
                    document.getElementById('myForm').reset(); // Reset form after submission
                } else {
                    throw new Error('Form submission failed!');
                }
            })
            .catch(function (error) {
                console.error(error);
                alert(
                    'An error occurred while submitting the form. Please try again later.'
                );
            });
    });