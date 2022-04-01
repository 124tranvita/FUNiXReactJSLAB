import { useState } from 'react';
import { Card } from 'react-bootstrap';

function Menu({ dishes }) {
  const [selectedDish, setSelectedDish] = useState({});

  return (
    <>
      <div className='row p-5'>
        {dishes.map((dish) => (
          <div className='col-12 col-md-6 col-xl-4' key={dish.id}>
            <Card className='m-1' onClick={() => setSelectedDish(dish)}>
              <Card.Img variant="top" src={dish.image} />
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {Object.keys(selectedDish).length !== 0 &&
        <div className="row">
          <div className='col-12'>
            <Card style={{ width: '50%' }} className='mx-auto'>
              <Card.Img src={selectedDish.image} alt={selectedDish.name} />
              <Card.ImgOverlay>
                <Card.Title>{selectedDish.name}</Card.Title>
                <Card.Text>{selectedDish.description}</Card.Text>
                <Card.Text>Category: {selectedDish.category}</Card.Text>
                <Card.Text>Price: {selectedDish.price}</Card.Text>
                <Card.Text>{selectedDish.label}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      }

    </>
  )
}

export default Menu