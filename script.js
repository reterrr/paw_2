(function () {
  const cw1 = document.getElementById('cw1');
  const cw1_1 = document.getElementById('cw1_1');
  const cw1_4 = document.getElementById('cw1_4');
  const cw2 = document.getElementById('cw2');
  const cw3 = document.getElementById('cw3');
  const answer = document.getElementById('answer');
  const loadingModal = document.getElementById('loadingModal'); // Pobranie modala

  // Funkcja do pokazywania i ukrywania modala
  function showLoading(show) {
    if (show) {
      loadingModal.classList.add('active');
    } else {
      loadingModal.classList.remove('active');
    }
  }

  // Wyświetlanie wszystkich postów
  cw1.addEventListener("click", function () {
    showLoading(true); // Pokaż modal
    answer.innerHTML = '<p>Loading...</p>';
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log('Fetched posts:', array); // Logowanie pobranych danych
        showLoading(false); // Ukryj modal

        answer.innerHTML = array.map(post => `
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
          </div>
        `).join('');
      })
      .catch(error => {
        showLoading(false); // Ukryj modal w przypadku błędu
        console.error('Error fetching posts:', error);
      });
  });

  // Wyświetlanie pojedynczego posta
  cw1_1.addEventListener("click", function () {
    const postId = 1; // Możesz zmienić ID, aby pobrać inny post
    showLoading(true); // Pokaż modal
    answer.innerHTML = '<p>Loading…</p>';

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        console.log('Fetched post:', post); // Logowanie danych pojedynczego posta
        showLoading(false); // Ukryj modal

        answer.innerHTML = `
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      })
      .catch(error => {
        showLoading(false); // Ukryj modal w przypadku błędu
        answer.innerHTML = '<p>Error loading post.</p>';
        console.error('Error fetching post:', error);
      });
  });

  // Tworzenie nowego posta
  cw1_4.addEventListener("click", function () {
    showLoading(true); // Pokaż modal
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
      console.log('Created new post:', post); // Logowanie nowo utworzonego posta
      showLoading(false); // Ukryj modal

      answer.innerHTML = `<p>Dodano nowy post o ID = ${post.id}</p>`;
    })
    .catch(error => {
      showLoading(false); // Ukryj modal w przypadku błędu
      answer.innerHTML = '<p>Wystąpił błąd przy dodawaniu posta.</p>';
      console.error('Error creating post:', error);
    });
  });

  // Placeholder dla przyszłych funkcji
  cw2.addEventListener("click", function () {
    showLoading(true); // Pokaż modal
    setTimeout(() => {
      showLoading(false); // Ukryj modal po 2 sekundach (symulacja ładowania)
      answer.innerHTML = '<p>Loading... (cw2)</p>';
      console.log('cw2 button clicked'); // Logowanie kliknięcia przycisku cw2
    }, 2000);
  });

  cw3.addEventListener("click", function () {
    showLoading(true); // Pokaż modal
    setTimeout(() => {
      showLoading(false); // Ukryj modal po 2 sekundach (symulacja ładowania)
      answer.innerHTML = '<p>Loading... (cw3)</p>';
      console.log('cw3 button clicked'); // Logowanie kliknięcia przycisku cw3
    }, 2000);
  });

})();

