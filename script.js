(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw1Single=document.getElementById('cw1_single')
  const cw1Post=document.getElementById('cw1_post')
  const cw2 = document.getElementById('cw2')
  const loading = document.getElementById('loading');
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  function showLoading() {
    console.log("Pokazuję okno Loading"); 
    loading.style.display = 'block';
  }

  function hideLoading() {
    console.log("Ukrywam okno Loading"); 
    loading.style.display = 'none';
  }


  cw1.addEventListener("click", function () {
    showLoading(); 
    answer.innerHTML = 'Loading...';
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        hideLoading();
        let htmlContent = '<ul>'; 
        posts.forEach(post => {
          htmlContent += `
            <li>
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </li>
          `;
        });
        htmlContent += '</ul>';
        answer.innerHTML = htmlContent; 
      })
      .catch(error => {
        hideLoading(); 
        answer.innerHTML = 'Error loading posts';
        console.error('Error fetching posts:', error);
      });
  });

  cw1Single.addEventListener("click", function () {
    showLoading();
    answer.innerHTML = 'Loading...';

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(post => {
        hideLoading();
        let htmlContent = `
          <h2>Single Post (ID=1)</h2>
          <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
        answer.innerHTML = htmlContent;
      })
      .catch(error => {
        hideLoading();
        answer.innerHTML = 'Error loading post';
        console.error('Error fetching post:', error);
      });
  });

  cw1Post.addEventListener("click", function () {
    showLoading();
    answer.innerHTML = 'Processing...';
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Nowy post',
        body: 'To jest treść nowego postu',
        userId: 1
      })
    })
    .then(response => response.json())
    .then(newPost => {
      hideLoading();
      answer.innerHTML = `Dodano nowy post o ID = ${newPost.id}`;
    })
    .catch(error => {
      hideLoading();
      answer.innerHTML = 'Error adding new post';
      console.error('Error creating post:', error);
    });
  });

  cw2.addEventListener("click", function () {
    showLoading();
    answer.innerHTML = 'Loading...';
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        hideLoading();
        console.log("Dane pobrane dla cw2:", posts); 
        let htmlContent = '<ul class="styled-posts">'; 
        posts.forEach(post => {
          htmlContent += `
          <li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </li>
          `;
        });
        htmlContent += '</ul>';
        answer.innerHTML = htmlContent; 
      })
      .catch(error => {
        hideLoading();
        answer.innerHTML = 'Error loading styled posts';
        console.error('Error fetching styled posts:', error);
      });
  });


  cw3.addEventListener("click", function () {
    //TODO
  })

})();
