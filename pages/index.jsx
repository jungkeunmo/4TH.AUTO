import React from "react";
import styled from "styled-components";
import useWidth from "../hooks/useWidth";
import useHeight from "../hooks/useHeight";

const Wrapper = styled.div`
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
`;

const RoundBox = styled.div`
    width: ${(props) => props.w};
    min-width: 220px;
    height: ${(props) => props.h};

    background: ${(props) => props.minsu};
`;

const App = () => {

    const width = useWidth();
    
    const height = useHeight();

    return <Wrapper>
        <RoundBox 
            minsu="blue" 
            w={width < 800 ? "150px" : "300px"}
            h={width < 800 ? "150px" : "300px"}
        />
        <RoundBox 
            minsu="yellow"
            w={width < 800 ? "150px" : "300px"}
            h={width < 800 ? "150px" : "300px"} 
            />
        <RoundBox 
            minsu="orange"
            w={width < 800 ? "150px" : "300px"} 
            h={width < 800 ? "150px" : "300px"}
            />
        <RoundBox 
            minsu="red"
            w={width < 800 ? "150px" : "300px"} 
            h={width < 800 ? "150px" : "300px"}
            />
    </Wrapper>
};

export default App;