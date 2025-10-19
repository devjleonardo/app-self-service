import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import Image from "next/image";
import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantePageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantePage = async ({ params }: RestaurantePageProps) => {
  const { slug } = await params;

  const restaurant = await getRestaurantBySlug(slug);

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TITULO */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant?.name}
          width={82}
          height={82}
        />

        <h2 className="font-semibold">{restaurant?.name}</h2>
      </div>

      {/* BEM VINDO */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>

      {/* METODO DE CONSUMO */}
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          buttonText="Para comer aqui"
          imageAlt="Para comer aqui"
          imageUrl="/dine-in.png"
          slug={slug}
          option="DINE_IN"
        />
        <ConsumptionMethodOption
          buttonText="Para levar"
          imageAlt="Para levar"
          imageUrl="/takeaway.png"
          slug={slug}
          option="TAKEAWAY"
        />
      </div>
    </div>
  );
};

export default RestaurantePage;
