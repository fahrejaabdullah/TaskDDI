import React from "react";


const DivPage = () => {
  const alertOnClick = name => {
    alert(name);
  };

  return (
    <div className='container'
      style={{
        background: 'gray',
        textAlign: 'center'
      }}
    >
      <span onClick={() => alertOnClick('DIV 1')}>DIV 1</span>
      <div
        className="div1"
        style={{
          background: 'gray',
          padding: '20px 40px 40px'
        }}
      >
        <div
          className="div2"
          style={{
            background: 'orange',
            textAlign: 'center',
            zIndex: 2
          }}
        >
          <span onClick={() => alertOnClick('DIV 2')}>DIV 2</span>
          <div
            className="div2"
            style={{
              background: 'orange',
              padding: '20px 40px 40px',
              zIndex: 2
            }}
          >
            <div
              className="div3"
              style={{
                background: 'green',
                textAlign: 'center',
                zIndex: 3
              }}
            >
              <span onClick={() => alertOnClick('DIV 3')}>DIV 3</span>
              <div
                className="div3"
                style={{
                  background: 'green',
                  height: '120px',
                  padding: '20px 40px 40px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivPage;
