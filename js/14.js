//function destructuring
function saveSettings({notifications, color: {theme}}) {
    console.log(theme);
}

saveSettings({
    notifications: {
        follow: true,
        alert: true,
        mkt: false
    },
    color: {
        theme: "blue"
    }
})
