
import Item from './Item';

export default function ItemList ({ items }) {
  return (
    <div className="grid">
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

