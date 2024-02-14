import DrinkList from "../components/DrinkList";

const DrinksPage = async () => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
  );

  const data = await response.json();

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">All Drinks</h1>
      <DrinkList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
