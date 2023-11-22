

const { Fragment, useState } = React;

const List = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (itemName) => {
    const index = selectedItems.indexOf(itemName);
    let updatedSelection = [];

    if (index === -1) {
      updatedSelection = [...selectedItems, itemName];
    } else {
      updatedSelection = selectedItems.filter((item) => item !== itemName);
    }

    setSelectedItems(updatedSelection);
  };

  return (
    <Fragment>
      <div className="SelectedItems">
        {selectedItems.map((itemName, index) => (
          <span key={index} className="SelectedItem">
            {itemName}
          </span>
        ))}
      </div>
      <ul className="List">
        {items.map((item) => (
          <li
            key={item.name}
            className={`List__item List__item--${item.color} ${
              selectedItems.includes(item.name) ? 'List__item--selected' : ''
            }`}
            onClick={() => toggleSelection(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

const styles = `
  .List__item--selected {
    background-color: yellow; 
    font-weight: bold;
  }
`;
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <List items={items}/>,
);
