import Item from "./Item";

type CollectionItem = {
  id: number;
  image: string;
  name: string;
  new_price: number;
  old_price: number;
};

type CollectionsProps = {
  title: string;
  collections: CollectionItem[];
};

const Collections = ({ title, collections }: CollectionsProps) => {
  return (
    <div className="container mx-auto py-48 flex flex-col items-center gap-5">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <hr className="w-[200px] h-[6px] rounded-lg bg-black/50" />
      <div className="mt-12 flex flex-wrap items-center gap-5">
        {collections.map((item) => (
          <Item key={item.id} props={item} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
