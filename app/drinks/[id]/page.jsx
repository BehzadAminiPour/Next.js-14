import Link from "next/link";
import goalsImg from "./goals.jpg";
import Image from "next/image";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleDrink = async ({ params }) => {
  const response = await fetch(`${url}${params.id} `);
  const data = await response.json();
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-sm btn-accent mb-3">
        Back to Drinks
      </Link>
      {/* <img src={goalsImg.src} alt="" /> */}
      {/* <Image src={goalsImg} alt="goals" priority width={100} /> */}
      <Image
        src={imgSrc}
        alt="coctail image"
        priority
        width={300}
        height={300}
      />
      <h1 className="text-2xl mt-3">{title}</h1>
    </div>
  );
};

export default SingleDrink;
