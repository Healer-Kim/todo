import React, { useState } from "react";
import styled from "styled-components";


// const today = new Date();
// const dateString = today.toLocaleString("ko-KR", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
// });
// const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
/// const todos = useTodoState();
/// const undoneTasks = todos.filter((todo) => !todo.done);

const Container = styled.div`

`

const TempDate = styled.div`
font-family: "Gill Sans", sans-serif;
`

const TempDay = styled.div`
font-family: "Gill Sans", sans-serif;
color: gray;
`

function TodoDate() {
    // return(
    //     <>
    //         <Title>(dateString)</Title>
    //     </>
    // );
    return(
        <Container>
            <TempDate>2022년 04월 26일</TempDate>
            <br></br>
            <TempDay>화요일</TempDay>
        </Container>

    )
};

export default TodoDate;