// how to use getStaticPaths

export async function getStaticPaths() {
    const response = await fetch('https://api.example.com/products');
    const products = await response.json();
  
    // Set fallback: false to indicate all pre-defined paths are generated at build time
    return {
      paths,
      fallback: false,
    };
  
 }