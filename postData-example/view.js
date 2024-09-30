document.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('postsList');
    
    // Function to fetch and display posts
    function displayPosts() {
        fetch('http://localhost:3000/posts') // Adjust the URL if needed
            .then(response => response.json())
            .then(posts => {
                postsList.innerHTML = '';
                

                posts.forEach(post => {
                    const postCard = document.createElement('div');
                    postCard.className = 'post-card';
                    
                    postCard.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                        <button class="delete-button" data-id="${post.id}">Delete</button>
                    `;
                    
                    postsList.appendChild(postCard);
                });

                // Attach delete event listeners to all delete buttons
                document.querySelectorAll('.delete-button').forEach(button => {
                    button.addEventListener('click', function() {
                        const postId = this.getAttribute('data-id');
                        fetch(`http://localhost:3000/posts/${postId}`, {
                            method: 'DELETE'
                        })
                        .then(response => {
                            if (response.ok) {
                                // Remove the post card from the DOM
                                this.closest('.post-card').remove();
                                // Check if no posts left
                                displayPosts();
                            } else {
                                console.error('Failed to delete post');
                            }
                        })
                        .catch(error => console.error('Error deleting post:', error));
                    });
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }

    // Initial load of posts
    displayPosts();

    // delete all button is not working need to fix

    // {// Handle the delete all button click
    // document.getElementById('deleteAllButton').addEventListener('click', () => {
    //     fetch('http://localhost:3000/posts', {
    //         method: 'DELETE'
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             // Clear the posts list in the DOM
    //             postsList.innerHTML = '';
    //         } else {
    //             console.error('Failed to delete all posts');
    //         }
    //     })
    //     .catch(error => console.error('Error deleting all posts:', error));
    // });}
});
