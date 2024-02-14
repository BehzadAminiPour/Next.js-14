import Link from "next/link";

const DrinkList = ({ drinks }) => {
  return (
    <ul>
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link href={`/drinks/${drink.idDrink}`}>{drink.strDrink}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
