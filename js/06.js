//temple literal (``) -> js안에서 html 작성


// const wrapper = document.querySelector(".wrapper");

// const addWelcome = () => {
//     const div = document.createElement("div");
//     const h1 = document.createElement("h1");
//     h1.innerText = "Hello"
//     h1.className = "sexyTitle"
//     div.append(h1);
//     wrapper.append(div);
// };

// setTimeout(addWelcome, 2000);



//
const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = 
    // HTML fragments
    `
        <div class="sexyTitle">
            <h1 class="title">Hello</h1>
        </div>
    `
    wrapper.innerHTML = div;
};

setTimeout(addWelcome, 2000);

// other(space를 적용함 )

console.log(`


hello

`);