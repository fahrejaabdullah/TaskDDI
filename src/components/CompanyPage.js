import React, { useState, useEffect } from "react";
import {Row, Col, Card} from 'antd'
import servicesAPI from "../services/index";
import '../App.css'

const CompanyPage = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    servicesAPI.getCategory().then(result => {
      setCategory(result?.data?.category || [])
    })
  }, []);

  const handleClickPage = (name) => {
    props.history.push({
      pathname: '/listExample/'+name,
    })
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Example Page</h3>
      </header>
      <div className='body'>
        <Row justify="space-between" gutter={[16, 16]}>
          {category.map(result => (
            <Col span={8}>
              <Card
                style={{ width: 260 }}
                cover={<img src={result?.url} />}
                hoverable
                onClick={() => handleClickPage(result?.name)}
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

export default CompanyPage;
