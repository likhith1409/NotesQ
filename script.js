const binId = '679dabdae41b4d34e4821ebd'; // Replace with your bin ID
const apiKey = '$2a$10$7G5sPS7FXRhLLaoaxqz8/uSZwz2Dm4iasxtcLgtgIaQ9xBKbzt9/C'; // Replace with your API key

async function updateViewCount() {
    try {
        // Fetch the current view count
        const getResponse = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
            headers: {
                'X-Master-Key': apiKey
            }
        });
        const getData = await getResponse.json();
        let views = getData.record.views;

        // Increment the view count
        views += 1;

        // Update the view count
        await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': apiKey
            },
            body: JSON.stringify({ views })
        });

        // Display the updated view count
        document.getElementById('impression-count').textContent = views;
    } catch (error) {
        console.error('Error updating view count:', error);
        document.getElementById('impression-count').textContent = 'Error';
    }
}

// Update the view count when the page loads
updateViewCount();