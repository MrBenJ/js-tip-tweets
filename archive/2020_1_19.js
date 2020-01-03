
// TIP: Use Omit<T,K> to create a new
// type omitting a previous key!

type Item = {
  name: string;
  description: string;
  value: number;
}

type PricelessItem = Omit<Item, 'value'>;

const MyPricelessRing: PricelessItem = {
  name: 'Priceless ring',
  description: 'A priceless ring of infinite value'
};




