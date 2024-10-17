(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw1Single=document.getElementById('cw1_single')
  const cw1Post=document.getElementById('cw1_post')
  const cw2 = document.getElementById('cw2')
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

  cw1.addEventListener("click", function () {
    answer.innerHTML='Loading...';
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        let htmlContent='<ul>';
        posts.forEach(post => {
          htmlContent+=`
            <li>
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </li>
          `;
        });
        htmlContent+='</ul>';
        answer.innerHTML=htmlContent;
      })
      .catch(error=> {
        answer.innerHTML='Error loading posts';
        console.error('Error fetching posts:', error);
      });
  });

  cw1Single.addEventListener("click", function(){
    answer.innerHTML='Loading...';
    
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response=>response.json())
      .then(post => {
        let htmlContent=`
          <h2>Single Post (ID=1)</h2>
          <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
          `;
        answer.innerHTML=htmlContent;
      })
      .catch(error=> {
          answer.innerHTML='Error loading posts';
          console.error('Error fetching posts:', error);
    });
  });

  cw1Post.addEventListener("click", function (){
    answer.innerHTML='Processing...';

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', 
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Nowy post',
        body: 'To jest tresc nowego postu',
        userId: 1
      })
    })
    .then(response=>response.json())
    .then(newPost=>{
      answer.innerHTML = `Dodano nowy post o ID = ${newPost.id}`;
    })
    .catch(error=> {
      answer.innerHTML='Error adding new post';
      console.error('Error creating posts:', error);
    });
  });

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
