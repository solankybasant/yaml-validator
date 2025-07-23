document.addEventListener('DOMContentLoaded', () => {
    const yamlInput = document.getElementById('yamlInput');
    const validateBtn = document.getElementById('validateBtn');
    const resultDiv = document.getElementById('result');

    validateBtn.addEventListener('click', async () => {
        const yamlContent = yamlInput.value;

        // Clear previous results
        resultDiv.textContent = '';
        resultDiv.className = 'result-area';

        try {
            const response = await fetch('/validate-yaml', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ yamlContent })
            });

            const data = await response.json();

            if (data.valid) {
                resultDiv.classList.add('result-valid');
                resultDiv.textContent = data.message;
            } else {
                resultDiv.classList.add('result-invalid');
                resultDiv.textContent = `${data.message}\n${data.error || ''}`;
            }
        } catch (error) {
            resultDiv.classList.add('result-invalid');
            resultDiv.textContent = `An error occurred: ${error.message}`;
            console.error('Fetch error:', error);
        }
    });
});