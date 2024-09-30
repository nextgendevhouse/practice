document.getElementById('postForm').addEventListener('submit', function(event) {
    // event.preventDefault(); Prevent the form from submitting in the traditional way

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a post object
    const postData = {
        title: title,
        content: content
    };

    // Send POST request using fetch
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success of data:', data);
        alert('Post created successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error creating the post.');
    });
});
