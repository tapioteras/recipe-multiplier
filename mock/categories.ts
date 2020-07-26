export enum CATEGORY {
  DAILY_FOOD = 2,
  CAKES = 1,
  OTHER = 3,
  IMPORTED = 123,
}

const categories = [
  { id: CATEGORY.DAILY_FOOD, name: "Arkiruoat" },
  { id: CATEGORY.CAKES, name: "Leivonnaiset" },
  { id: CATEGORY.OTHER, name: "Muut" },
  { id: CATEGORY.IMPORTED, name: "Tallennettu laitteelle K-Ruoasta" },
];

export default categories;
