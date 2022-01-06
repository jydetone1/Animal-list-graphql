import { v4 } from 'uuid';

export const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, slug, stock, onSale, category },
    ctx
  ) => {
    const newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    };
    ctx.animals.push(newAnimal);
    return newAnimal;
  },

  removeAnimal: (parent, args, ctx) => {
    let index = animals.findIndex((animal) => {
      return animal.id === args.id;
    });
    ctx.animals.splice(index, 1);
    return true;
  },
};
