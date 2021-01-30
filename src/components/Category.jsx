import React from 'react';

import * as api from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.attstate = this.attstate.bind(this);
    this.state = {
      category: [],
      missstate: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const categories = await api.getCategories();
    this.attstate(categories);
  }

  handleClick(event) {
    const { onClick } = this.props;
    onClick(event.target.id);
  }

  attstate(categories) {
    this.setState({ category: categories, missstate: true });
  }

  render() {
    const { category, missstate } = this.state;

    if (missstate === false) {
      return <p>\o/</p>;
    }
    return (
      <ul>
        {category.map((obj) => (
          <button
            type="button"
            id={ obj.id }
            key={ obj.id }
            data-testid="category"
            onClick={ this.handleClick }
          >
            {obj.name}
          </button>
        ))}
      </ul>

    );
  }
}

export default Category;
