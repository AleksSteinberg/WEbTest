new Vue({
    el: '#app',
    data: {
        message: 'Welcome to Telegram WebApp',
        buttonText: 'Click me'
    },
    methods: {
        handleClick() {
            this.message = 'Button clicked!';
        }
    },
    template: `
        <div>
            <h1>{{ message }}</h1>
            <button @click="handleClick">{{ buttonText }}</button>
        </div>
    `
});

document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;

    new Vue({
        el: '#app',
        data: {
            message: 'Welcome to Telegram WebApp',
            buttonText: 'Click me',
            telegramUser: tg.initDataUnsafe.user ? tg.initDataUnsafe.user.username : 'Unknown User'
        },
        methods: {
            handleClick() {
                this.message = 'Button clicked!';
                tg.sendData(JSON.stringify({ buttonClicked: true }));
            }
        },
        template: `
            <div>
                <h1>{{ message }}</h1>
                <p>Hello, {{ telegramUser }}</p>
                <button @click="handleClick">{{ buttonText }}</button>
            </div>
        `
    });
});

