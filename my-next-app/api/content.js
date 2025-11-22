const FetchContent = async (slug) => {
  try {
    // const response = await fetch(`${process.env.DUMMY_DATA}pages?slug=home-page`, );
    const response = await fetch(`https://epsonadvantage.langoorqa.net/salugudda/wp-json/wp/v2/pages?slug=home-page`);
    if (!response.ok) {
      throw new Error("Failed to fetch content");
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching content:", error);
    return null; 
  }
};
export default FetchContent;