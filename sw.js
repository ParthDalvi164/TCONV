if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        this.navigator.serviceWorker.register('/sw.js', {scope: "/"}).then(function(registeration) {
            console.log('service work reg succeess with scope:', registeration.scope);

        }, function(err) {
            console.error('serviceW reg failed:', err);
        });
    })
}