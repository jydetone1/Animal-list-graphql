export const Category = {
  animals: (parent, args, ctx) => {
    return ctx.animals.filter((animal) => {
      return animal.category == parent.id;
    });
  },
};
