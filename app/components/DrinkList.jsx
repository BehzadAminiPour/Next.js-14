import Image from "next/image";
import Link from "next/link";

const DrinkList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-3 gap-4 mt-6">
      {drinks.map((drink) => (
        <li
          key={drink.idDrink}
          className="p-2 bg-white hover:bg-slate-100 hover:rounded-md"
        >
          <Link href={`/drinks/${drink.idDrink}`}>
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                alt="coctail image"
                className="rounded-md object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
