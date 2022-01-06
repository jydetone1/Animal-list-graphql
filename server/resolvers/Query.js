export const Query = {
  animals: (parent, args, ctx) => ctx.animals,
  animal: (parent, args, ctx) => {
    const animal = ctx.animals.find((animal) => {
      return animal.slug === args.slug;
    });
    return animal;
  },
  categories: (parent, args, ctx) => ctx.categories,
  category: (parent, args, ctx) => {
    const category = ctx.categories.find((category) => {
      return category.slug === args.slug;
    });
    return category;
  },
};
