export const Animal = {
  category: (parent, args, ctx) => {
    console.log(parent);
    return ctx.categories.find((category) => {
      return category.id === parent.category;
    });
  },
};
