// Function to fetch news articles from the NewsAPI
async function fetchNewsArticles() {
    const apiKey = '55267407dd21432eb3625b80d9978a35'; // Replace with your actual NewsAPI key
  
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
      const data = await response.json();
      const articles = data.articles;
      displayNewsArticles(articles);
    } catch (error) {
      console.log('Error fetching news articles:', error);
    }
    // Get the form and news container elements
const searchForm = document.getElementById('search-form');
const newsContainer = document.getElementById('news-container');

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the search query from the input field
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.trim();

  // Clear the input field
  searchInput.value = '';

  // Perform the search or filter logic based on the search term
  const filteredArticles = newsArticles.filter(article => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Display the filtered articles
  displayNewsArticles(filteredArticles);
}

// Add event listener to the form's submit event
searchForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Function to display news articles on the webpage
  function displayNewsArticles(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
  
    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');
      const titleElement = document.createElement('h2');
    const linkElement = document.createElement('a');
    linkElement.href = article.url; // Assuming the article object has a 'url' property
    linkElement.textContent = article.title;
    linkElement.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(article.url, '_blank');
    });
    titleElement.appendChild(linkElement);
    articleElement.appendChild(titleElement);

     
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = article.description;
      articleElement.appendChild(descriptionElement);
  
      newsContainer.appendChild(articleElement);
    });
  }
  
  // Call the fetchNewsArticles function to fetch and display news articles
  fetchNewsArticles();