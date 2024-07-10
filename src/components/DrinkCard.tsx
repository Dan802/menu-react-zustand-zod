import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
  drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {
  
  const fetchRecipeById = useAppStore((state) => state.fetchRecipeById)
  
  return (
    <div className="border shadow-lg">
      <div className="overflow-hidden">
        <img src={drink.strDrinkThumb} alt={`${drink.strDrink}'s image`}
          className="hover:scale-125 transition-transform hover:rotate-2"
        />
      </div>

      <div className="p-5 ">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>

        <button 
          onClick={() => fetchRecipeById(drink.idDrink)}
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
        >
          Recipe
        </button>
      </div>
    </div>
  )
}
