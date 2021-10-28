import React, { useState } from "react";
import CardComponent from "./CardComponent";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";

export default function Home() {
  const [list, setList] = useState([
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229162000-14dc4cc5-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229162023-7eb6c401-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229162037-1cdea4f9-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229161931-a31280ac-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229162119-3bd4efa7-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229161942-7ee52020-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229162011-56e14e5c-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229162053-a431708c-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229162014-eb032ae7-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229161917-90f3c803-th.jpg",
      point: 0,
    },
    {
      Title: "Car Models",
      ImgUrl:
        "https://resimdiyari.com/_data/i/upload/2012/12/29/20121229162018-42d5035d-th.jpg",
      point: 0,
    },
  ]);

  function increament(index) {
    const tempArr = list;
    tempArr[index].point += 1;
    setList([...tempArr]);
    sortedList();
  }
  function decrease(index) {
    const tempArr = list;
    tempArr[index].point -= 1;
    sortedList();
  }
  function sortedList(params) {
    const tempArr = list;
    tempArr.sort((a, b) => b.point - a.point);
    setList([...tempArr]);
  }
  return (
    <div>
      <Container>
        <Row>
          {list.map((item, index) => (
            <Col xs="4" className="mt-5">
              <CardComponent
                increament={() => increament(index)}
                decrease={() => decrease(index)}
                title={item.Title}
                img={item.ImgUrl}
                point={item.point}
              ></CardComponent>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
