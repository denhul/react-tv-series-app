import React from 'react';

// const Intro = (props) => {
//     return (
//       <p className="App-intro">
//         Our first functional component.
//       </p>
//     );
//   };

const Intro = (props) => (
      <p className="App-intro">
        {props.message}
      </p>
    );


  export default Intro;
