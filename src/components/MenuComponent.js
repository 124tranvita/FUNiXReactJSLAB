import { useState } from 'react';
import { Card } from 'react-bootstrap';
import DishDetail from './DishdetailComponent';

function Menu({ dishes }) {
  // Selected dish state
  const [selectedDish, setSelectedDish] = useState({});
  // Show dish detail state
  const [show, setShow] = useState(false);

  const handleViewDetail = (dish) => {
    setSelectedDish(dish)

    if (selectedDish.id !== dish.id) {
      setShow(true);
    } else {
      setShow(!show)
    }
  }

  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
      <div className='row p-5'>
        {dishes.map((dish) => (
          <div className='col-12 col-md-6 col-xl-4' key={dish.id}>
            <Card className='m-1' onClick={() => handleViewDetail(dish)}>
              <Card.Img variant="top" src={dish.image} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {show && <DishDetail selectedDish={selectedDish} />}
    </div>
  )
}

export default Menu