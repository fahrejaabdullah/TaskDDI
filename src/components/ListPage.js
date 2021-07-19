import React, { useState, useEffect } from "react";
import {Row, Col, Card} from 'antd'
import '../App.css'

import servicesAPI from "../services/index";

const ListPage = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    let pathname = props.history.location.pathname.split('/')[2]
    servicesAPI.getList(pathname).then(result => {
			setCategory(result?.data?.data || [])
    })
  }, []);

  const handleDetail = (name) => {
    props.history.push({
      pathname: '/detailPage/'+name,
    })
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Example List</h3>
      </header>
      <div className='body'>
        <Row justify="space-between" gutter={[16, 16]}>
          {category.map(result => (
            <Col span={8}>
              <Card
                style={{ width: 260 }}
                cover={<img src={result?.url} />}
                hoverable
                onClick={() => handleDetail(result?.name)}
              >
                {result?.name.toUpperCase()}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ListPage;
