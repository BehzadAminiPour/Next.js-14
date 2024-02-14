const DrinksPage = async () => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );

  const drinks = await response.json();

  return <div>Drinks</div>;
};

export default DrinksPage;
