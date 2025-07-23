const express = require('express');
const yaml = require('js-yaml'); // Correctly imported
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (your frontend)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to validate YAML
app.post('/validate-yaml', (req, res) => {
    const { yamlContent } = req.body;

    if (!yamlContent) {
        return res.status(400).json({ valid: false, message: 'No YAML content provided.' });
    }

    try {
        // Use yaml.loadAll() to parse multiple YAML documents
        const documents = yaml.loadAll(yamlContent);
        // You can add additional checks here if needed, for example,
        // to ensure each document is a valid Kubernetes resource structure.
        // For basic syntax validation, just successfully parsing is enough.

        // If loadAll succeeds without throwing, the YAML is syntactically valid.
        res.json({ valid: true, message: `YAML is valid! Found ${documents.length} document(s).` });
    } catch (e) {
        // js-yaml throws a YAMLException for invalid YAML
        res.json({ valid: false, message: 'Invalid YAML!', error: e.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});