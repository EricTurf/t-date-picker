import React from 'react';

import {
  Main,
  Value,
  Arrow,
  ItemList,
  Item,
  ArrowContainer
} from './dropdown.styled';

export default class Dropdown extends React.Component {
  static defaultProps = { items: [] };

  state = { open: false };

  toggleOpen = () => this.setState({ open: !this.state.open });

  buildItem = (o, i) => (
    <Item
      key={`${o}-${i}`}
      onClick={e => {
        e.preventDefault();
        this.props.onSelect(o);
        this.toggleOpen();
      }}
    >
      {o}
    </Item>
  );

  render() {
    const { items, value } = this.props;
    const { open } = this.state;

    return (
      <Main className={this.props.className}>
        <Value>{value}</Value>
        <ArrowContainer onClick={this.toggleOpen}>
          <Arrow open={open} />
        </ArrowContainer>
        {open && <ItemList>{items.map(this.buildItem)}</ItemList>}
      </Main>
    );
  }
}
