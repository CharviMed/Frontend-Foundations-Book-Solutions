document.addEventListener('DOMContentLoaded', () => {
    const newPostButton = document.getElementById('new-post-button');
    const postsList = document.getElementById('posts-list');
    const newPostForm = document.getElementById('new-post-form');
    const postForm = document.getElementById('post-form');
    const postDetails = document.getElementById('post-details');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const backButton = document.getElementById('back-button');
    const cancelButton = document.getElementById('cancel-button');

    let posts = [];

    // Show the form to add a new post
    newPostButton.addEventListener('click', () => {
        newPostForm.classList.remove('hidden');
        postsList.classList.add('hidden');
    });

    // Handle the form submission to add a new post
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = postForm.title.value.trim();
        const content = postForm.content.value.trim();

        if (title && content) {
            const post = { id: posts.length + 1, title, content };
            posts.push(post);

            postForm.reset();
            newPostForm.classList.add('hidden');
            postsList.classList.remove('hidden');

            displayPosts();
        }
    });

    // Display the list of posts
    function displayPosts() {
        postsList.innerHTML = '';

        if (posts.length === 0) {
            postsList.innerHTML = '<p>No posts yet!</p>';
            return;
        }

        posts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.classList.add('post-item');
            postItem.innerHTML = `<h3>${post.title}</h3><p>${post.content.substring(0, 100)}...</p><button onclick="viewPost(${post.id})">Read More</button>`;
            postsList.appendChild(postItem);
        });
    }

    // View an individual post
    window.viewPost = function(id) {
        const post = posts.find(p => p.id === id);

        if (post) {
            postTitle.textContent = post.title;
            postContent.textContent = post.content;
            
            postDetails.classList.remove('hidden');
            postsList.classList.add('hidden');
        }
    };

    // Go back to the list of posts
    backButton.addEventListener('click', () => {
        postDetails.classList.add('hidden');
        postsList.classList.remove('hidden');
    });

    // Cancel adding a new post
    cancelButton.addEventListener('click', () => {
        newPostForm.classList.add('hidden');
        postsList.classList.remove('hidden');
    });

    // Initial display of posts
    displayPosts();
});
