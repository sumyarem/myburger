export const  addingredient = ortsNer => {
      return{
            type: "ADD_INGREDIENT",
            ortsNer
      };
};

export const  removeingredient = ortsNer => {
      return{
            type: "REMOVE_INGREDIENT",
            ortsNer
      };
};