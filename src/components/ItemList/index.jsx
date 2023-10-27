import './styles.css';
// eslint-disable-next-line react/prop-types
function ItemList({ title, description }) {
  return (
    <div className="item-list">
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  );
}

export default ItemList;
