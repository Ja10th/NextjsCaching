// how to use getStaticProps for caching

export async function getStaticProps() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
  
    // Revalidate the data every 60 seconds (can be adjusted)
    return {
        props: {
          data: data,
        },
        cacheControl: 'public, immutable', // Never revalidate
      };
  }
