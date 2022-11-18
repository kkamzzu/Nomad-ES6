//Object Destructuring(비구조화)
//destructuring은 object나 array, 그 외 요소들 안의 변수를 바깥으로 끄집어 내서 사용할 수 있도록 하는 것.

const settings = {
    // notifications: {
    //     // follow: true,
    //     alerts: true,
    //     unfollw: false
    // },
    color: {
        theme: "dark"
    }
};

//before (문제: 보기싫다,follow값이 아예 없을 수 있다는 것 )
// if(settings.notification.follow) {
//     //send email
// }

//setting안의 notifications으로부터 follow 가져오기 
// notifications안으로 접근하고, 그건 settings안에 있는데, follow만 가져온다

//settings안의 notificatins 안으로 가서 follow가 있는지 찾아본 다음에 
//follow가 없으면 follow = false라고 선언해줌

const {notifications: {follow = false} ={} //여기엔 무슨 값이든 넣을 수 있음
} = settings; //error (이 경우엔notifications은 변수가 아님)

console.log(follow) //이런 방식은 큰 오브젝트에서 특정변수나 그 안에 속한 작은 오브젝트에 접근할 수 있도록 해줌


// //same

// //1
// const {
//     notifications
// } = settings;

// //2
// const notifications = settings.notifications; 

//notifications object가 통채로 없다면?
//notifications default 값을 설정
//const {notifications: {follow = false} ={} //여기엔 무슨 값이든 넣을 수 있음
// } = settings;