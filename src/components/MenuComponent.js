import { useState } from 'react';
import { Card } from 'react-bootstrap';
import DishDetail from './DishdetailComponent';

/**
 * 1. Liệt kê tất cả dish bằng Card
 * 2. Tạo một useState để lưu giá trị của dish đã chọn (selectedDish) và truyền vào component DishDetail với initState = {}
 * 3. Tạo một useState để thực hiện mount/umount component DishDetail thông qua giá trị của show (true/false)
 * 4. Tạo logic cho hàm handleViewDetail
 * -> Set state cho selectedDish
 * -> Khi dish được chọn có giá trị khác với dish được lưu trong selectedDish -> hiển thị component DishDetail
 * -> Ngược lại ẩn component DishDetail
 * 5. Truyền props selectedDish vào component DishDetail
 */


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