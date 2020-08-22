export enum CATEGORY {
  DAILY_FOOD = 2,
  CAKES = 1,
  OTHER = 3,
  IMPORTED = 123,
  CREATED = 124,
}

const categories = [
  { id: CATEGORY.DAILY_FOOD, name: "Arkiruoat" },
  { id: CATEGORY.CAKES, name: "Leivonnaiset" },
  { id: CATEGORY.OTHER, name: "Muut" },
  { id: CATEGORY.IMPORTED, name: "Tallennettu laitteelle K-Ruoasta" },
  { id: CATEGORY.CREATED, name: "Itse tehdyt reseptit" },
];

export default categories;
