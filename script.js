(function () {
  const cw1 = document.getElementById('cw1')
  const cw1_1 = document.getElementById('cw1_1')
  const cw1_4 = document.getElementById('cw1_4')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
    
  cw1.addEventListener("click", function () {
    answer.innerHTML = '<p>Loading...</p>';
    
     fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        answer.innerHTML = array.map(post => `
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
          </div>
        `).join('');
      })
      .catch(error => console.error('Error fetching posts:', error));
  })
  
  cw1_1.addEventListener("click", function () {
    const postId = 1; // You can change this ID to load a different post
    answer.innerHTML = '<p>Loading…</p>';

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        answer.innerHTML = `
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      })
      .catch(error => {
        answer.innerHTML = '<p>Error loading post.</p>';
        console.error('Error fetching post:', error);
      });
  })
  
  cw1_4.addEventListener("click", function () {
    answer.innerHTML = '<p>Processing…</p>';

    const newPost = {
      title: 'Foo Bar',
      body: 'This is the content of the new post',
      userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(post => {
      answer.innerHTML = `<p>Dodano nowy post o ID = ${post.id}</p>`;
    })
    .catch(error => {
      answer.innerHTML = '<p>Wystąpił błąd przy dodawaniu posta.</p>';
      console.error('Error:', error);
    });
  });
  
  

  cw2.addEventListener("click", function () {
    answer.innerHTML = '<p>Loading... (cw2)</p>';
    // Implement functionality for cw2 button
  })



  cw3.addEventListener("click", function () {
    answer.innerHTML = '<p>Loading... (cw3)</p>';
    // Implement functionality for cw3 button
  })

  

})();

