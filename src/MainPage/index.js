import React, { useState } from "react";
import styled from "styled-components";

import TodoDate from "../TodoDate";
import TodoLeft from "../TodoLeft";
// import TodoRight from "../TodoRight";

const Container = styled.div`
    height: 100vh;
    width: 100vh;
    background-color: beige;
`;



const TodoContainer = styled.div`
    border-radius: 20px;
    background-color: white;
    width: 370px;
    height: 740px;
    padding: 20px;
`;

const BreakLine = styled.hr`
    margin-bottom: 18px;
`;

function MainPage() {
        // const newTodos = todos.filter((todo) => todo,id !== id);
        // console.log(newTodos);
    return(
        <Container>
            <TodoContainer>
                <TodoDate/>
                {/* <TodoLeft todos={todos}/>

                <BreakLine></BreakLine>
                <TodoAdd todos={todos} updateTodo={addTodo}/>
                <TodoList
                    todoes={todos}
                    deleteTodo={removeTodo}
                /> */}
            </TodoContainer>
        </Container>
    )
};

export default MainPage;