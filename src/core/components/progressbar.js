import React from 'react';
import styled from 'styled-components';

const Progress = styled.div`
      width: 400px;
      height: 30px;
      border-radius: 4px;
      border: 1px solid #bbb;
      position: relative;
`;

const Span = styled.span`
      width: 0;
      height: 100%;
      background-color: #555;
      position: absolute;
      transition: width 1s;
`;

const getStyle = (num, length) => {
    return {
        width: ((num - 1)  / (length - 1) * 100) + '%'
    }
};

const ProgressBar = (props) => (
        <div>
            <Progress className="progress">
                <Span style={getStyle(props.step, props.length)}></Span>
            </Progress>
        </div>
);

export default ProgressBar;