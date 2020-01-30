function linkResolver (doc) {
    // Return the path depending on Prismic Document's type
    // If it is a Single Custom Type with the API ID of "home"
    if (doc.type === 'home_page') {
      return '/';
    }
    // Default to the root
    return '/';
}