function searchWebsite() {
    // Get the value from the input field
    const searchTerm = document.getElementById('searchInput').value.trim();
  
    // Check if the input is empty
    if (searchTerm === '') {
      alert('Search term cannot be empty!');
      return false; // Prevent form submission
    } else {
      // Redirect to Bing with the search term
      const bingUrl = `https://www.bing.com/search?q=${encodeURIComponent(searchTerm)}`;
      window.location.href = bingUrl;
      return false; // Prevent form submission
    }
  }