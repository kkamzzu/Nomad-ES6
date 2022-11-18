// styled components :리액트를 위한 라이블러리, 패킷
// js 에서 css를 쓸 수 있고, htmldmf 얻을 수 있음.



// styled component가 동작하는 방식.
// 함수 호출시, string들은 arguments로 들어가게 됨.

// const styled = css => console.log(css);
// styled`border-radius:10px; 
// color:blue`;

// styled("h1")`border-radius:10px; 
// color:blue`;


// 해야할 것 : functiond 안에 function을 리턴 하는 것.
const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        const styles = args[0];
        el.style = styles;
        return el;
    }
};
// 
// whatever i want ex) div, span,,,
const title = styled("h1")`
    background-color: red;
    color: blue;
`;

const subtitle = styled("span")`
    color: green;
`
console.log(title);

title.innerText = "We just cloned";
subtitle.innerText = "Styled Components"

document.body.append(title, subtitle);