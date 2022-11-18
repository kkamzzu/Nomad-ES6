const wrapper = document.querySelector(".wrapper");

const friends = ["kkamzzu", "barnes", "tagoo", "yezi"];

// 너무길어
// const ul = document.createElement("ul");
// friends.forEach(frined => ul.append(`<li>${frined}</li>`))

// wrapper.append(ul)
// map = 무엇을 리턴하던지 그 값을 array로 만듬
const list =`
    <h1>Peopel i love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}🤍</li>`).join("")}
    </ul>    
`;

wrapper.innerHTML = list;

