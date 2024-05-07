import OmeletteImage from '../../assets/images/image-omelette.jpeg';

function Recipe() {
  return (
    <main className="m-auto w-full max-w-[736px] bg-white sm:w-[90%] sm:rounded-3xl sm:p-10">
      <img
        src={OmeletteImage}
        alt="An omelette."
        className="rounded-none sm:rounded-xl"
      />
      <article className="px-8 py-10 sm:px-0">
        <header className="space-y-6">
          <h1 className="text-4xl leading-10 text-dark-charcoal sm:text-[2.5rem]">
            Simple Omelette Recipe
          </h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </header>
        <div className="my-8 space-y-4 rounded-xl bg-rose-white p-6 sm:p-7">
          <h2 className="text-xl font-semibold leading-5 text-dark-raspberry">
            Preparation time
          </h2>
          <ul className="list-disc space-y-2 pl-4 text-[.75rem] marker:text-dark-raspberry">
            <li>
              <p className="ml-6 text-base">
                <b>Total</b>: Approximately 10 minutes
              </p>
            </li>
            <li>
              <p className="ml-6 text-base">
                <b>Preparation</b>: 5 minutes
              </p>
            </li>
            <li>
              <p className="ml-6 text-base">
                <b>Cooking</b>: 5 minutes
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-8 space-y-6">
          <h3 className="text-[1.75rem] leading-7 text-nutmeg">Ingredients</h3>
          <ul className="list-disc space-y-2 pl-4 text-[.75rem] marker:text-nutmeg">
            <li>
              <p className="ml-6 text-base">2-3 large eggs</p>
            </li>
            <li>
              <p className="ml-6 text-base">Salt, to taste</p>
            </li>
            <li>
              <p className="ml-6 text-base">Pepper, to tastex</p>
            </li>
            <li>
              <p className="ml-6 text-base">1 tablespoon of butter or oil</p>
            </li>
            <li>
              <p className="ml-6 text-base">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </p>
            </li>
          </ul>
        </div>

        <hr className="border-light-grey" />

        <div className="my-8 space-y-6">
          <h3 className="text-[1.75rem] text-nutmeg">Instructions</h3>
          <ol className="ml-2 list-decimal space-y-2 pl-4 marker:text-nutmeg">
            <li>
              <p className="ml-4">
                <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </p>
            </li>
            <li>
              <p className="ml-4">
                <b>Heat the pan</b>: Place a non-stick frying pan over medium
                heat and add butter or oil.
              </p>
            </li>
            <li>
              <p className="ml-4">
                <b>Cook the omelette</b>: Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </p>
            </li>
            <li>
              <p className="ml-4">
                <b>Add fillings (optional)</b>: When the eggs begin to set at
                the edges but are still slightly runny in the middle, sprinkle
                your chosen fillings over one half of the omelette.
              </p>
            </li>
            <li>
              <p className="ml-4">
                <b>Fold and serve</b>: As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </p>
            </li>
            <li>
              <p className="ml-4">
                <b>Enjoy</b>: Serve hot, with additional salt and pepper if
                needed.
              </p>
            </li>
          </ol>
        </div>

        <hr className="border-light-grey" />

        <div className="mt-8 space-y-6">
          <h3 className="text-[1.75rem] text-nutmeg">Nutrition</h3>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="w-full">
            <tbody className="divide-y text-left">
              <tr>
                <th className="w-1/2 pb-3">
                  <p className="pl-8 font-normal">Calories</p>
                </th>
                <td className="w-1/2 pb-3">
                  <p className="pl-2 font-bold text-nutmeg">277kcal</p>
                </td>
              </tr>
              <tr>
                <th className="w-1/2 py-3">
                  <p className="pl-8 font-normal">Carbs</p>
                </th>
                <td className="w-1/2 py-3">
                  <p className="pl-2 font-bold text-nutmeg">0g</p>
                </td>
              </tr>
              <tr>
                <th className="w-1/2 py-3">
                  <p className="pl-8 font-normal">Protein</p>
                </th>
                <td className="w-1/2 py-3">
                  <p className="pl-2 font-bold text-nutmeg">20g</p>
                </td>
              </tr>
              <tr>
                <th className="w-1/2 pt-3">
                  <p className="pl-8 font-normal">Fat</p>
                </th>
                <td className="w-1/2 pt-3">
                  <p className="pl-2 font-bold text-nutmeg">22g</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </main>
  );
}

export default Recipe;
