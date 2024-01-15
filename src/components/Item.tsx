type ItemProps = {
  id: number;
  image: string;
  name: string;
  new_price: number;
  old_price: number;
};

const Item = ({ props }: { props: ItemProps }) => {
  return (
    <div className="w-[350px] hover:scale-105 transition-all duration-200">
      <img src={props.image} alt="" />
      <p className="mx-[6px]">{props.name}</p>
      <div className="flex gap-5">
        <p className="text-lg font-semibold mx-[6px]">${props.new_price}</p>
        <p className="text-lg font-medium text-gray-500 line-through">
          ${props.old_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
