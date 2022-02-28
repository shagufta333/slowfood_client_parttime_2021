import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, List, Container } from "semantic-ui-react";

const ReviewOrder = () => {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({});

  const fetchOrder = async () => {
    const response = await axios.get("https://reqres.in/api/orders/5");
    setOrder(response.data.order);
  };

  const orderList = order.products?.map((product) => {
    return <List.Item key={product.id}>{product.name}</List.Item>;
  });

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button onClick={fetchOrder} data-cy="show-order">
          Review Order
        </Button>
      }
    >
      <Modal.Header>Your Delicious Order</Modal.Header>
      <Modal.Content>
        <List data-cy="order-list">{orderList}</List>
      </Modal.Content>
      <Modal.Actions>
        <Container data-cy="total-cost"> Total {order.total}kr</Container>
      </Modal.Actions>
    </Modal>
  );
};

export default ReviewOrder;
