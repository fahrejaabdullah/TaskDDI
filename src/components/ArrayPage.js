import React from "react";

const ArrayPAge = () => {
  const exampleData1 = [['JakartaJs'], ['AWSome Day', 'Elixir'], ['GoJakarta', 'Elixir']]
  // const exampleData2 = [['JakartaJs', 'Elixir'], ['Elixir'], ['JakartaJs', 'Elixir']]
  let finalSame = false


  function compare(data){
    let isSame = false
    data.map((res, index) => {
      for (let indexLoop = 1; indexLoop < data.length; indexLoop++) {
        console.log('awal :', index)
        console.log('kedua: ', data[indexLoop].length)
        console.log('index aktif: ', indexLoop)
        if (index < data.length && indexLoop !== index) {
          isSame = res.length === data[indexLoop].length && res.every((result, indexEv) => {
            console.log('data satu: ', result)
            console.log('data dua: ', data[indexLoop][indexEv])
            return result === data[indexLoop][indexEv]
          })
        }
      }
      console.log('compare same: ', isSame)
      if (isSame) {
        finalSame = isSame
      }
    })
  }
    
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Example Array
        </h3>
      </header>
      <div>
        <span style={{whiteSpace: 'pre'}}>
          clothes[0]: {exampleData1[0].toString() + `\n`}
          clothes[1]: {exampleData1[1].toString() + `\n`}
          clothes[2]: {exampleData1[2].toString() + `\n`}
        </span>
        <span>
          is same: {finalSame.toString()}
        </span>
        { compare(exampleData1) }
      </div>
    </div>
  );
};

export default ArrayPAge;
