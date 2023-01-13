const friends = ["dfd","afsdf","gsdaf","dfd"];

function* friendTeller(){
    for(const friend of friends){
        yield friend;
    }
}

const friendLooper = friendTeller()