import { Col, Collapse, Row } from "antd";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import SdFunctionGlobal from "../function/SdFunctionGlobal";
import SdTable from "../sd-component/SdTable";

const tableUse = `const columns = [
  {
    title: 'Nomor',
    dataIndex: 'noRegistrasi',
    key: 'noRegistrasi',
    sorter: true,
  },
  {
    title: 'Name',
    dataIndex: 'namaSiswa',
    key: 'namaSiswa',
    sorter: true,
  }
]


<SdTable
  columns={columns}
  api='/SdTable'
/>
`

const SdTableScreen = () => {
  const [content, setContent] = useState("");
  const columns = [
    {
      title: 'Nomor',
      dataIndex: 'noRegistrasi',
      key: 'noRegistrasi',
      sorter: true,
    },
    {
      title: 'Name',
      dataIndex: 'namaSiswa',
      key: 'namaSiswa',
      sorter: true,
    }
  ]
  const columnsProperty = [
    {
      title: 'Property',
      dataIndex: 'property',
      key: 'property',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Default',
      dataIndex: 'default',
      key: 'default',
    }
  ]

  return (
    <div className="container">
      <Row gutter={[0,30]}>
        <Col span={24}>
          <Title>SdTable</Title>
          <Text>Adalah sebuah <code>Table Component</code> yang memudahkan anda untuk memanggil data <code>API</code> dan mengolahnya secara cepat hanya dengan menginputkan property api saja</Text>
        </Col>

        <Col>
          <Title level={4}>Cara Menggunakan</Title>
        </Col>
        <Col span={24}>  
        <Collapse defaultActiveKey={['1']}>
          <CollapsePanel header={`Specify dataSource dari table`} key='1'>
            <pre>
              <code>
                {tableUse}
              </code>
            </pre>
          </CollapsePanel>
          <CollapsePanel header={`Specify response api`} key='2'>
            <pre>
              {JSON.stringify(SdFunctionGlobal.sortingObject(content),"",2)}
            </pre>
          </CollapsePanel>
        </Collapse>
      </Col>
        <Col span={24}>
          <SdTable
            columns={columns}
            api='https://demo5436246.mockable.io/SdTable'
            getResponse={res=>setContent(res)}
          />
        </Col>
        <Col>
          <Title level={4}>Property</Title>
        </Col>
        <Col span={24}>
          <SdTable
            columns={columnsProperty}
          />
        </Col>
      </Row>

    </div>
  );
};

export default SdTableScreen;
