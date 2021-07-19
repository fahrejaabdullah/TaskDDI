import React, { useState, useEffect } from "react";
import {Row, Col, Card} from 'antd'
import '../App.css'

import servicesAPI from "../services/index";

const DetailPage = (props) => {
  const [nameCompany, setCompany] = useState('');

  useEffect(() => {
    console.log(props)
    let pathname = props.history.location.pathname.split('/')[2]
    setCompany(pathname)
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Example Detail</h3>
      </header>
      <div className='body'>
        <Row justify="space-around" gutter={[16, 16]}>
          <Col span={18} style={{ textAlign: '-webkit-center'}}>
            <Card
              style={{ width: 360 }}
              cover={<img src="https://img.icons8.com/ios/100/000000/company.png" />}
            >
              {nameCompany.toUpperCase()}
            </Card>
            <p className="paragraphStyle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetailPage;
