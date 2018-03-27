var feed = new Instafeed({
    get: 'user',
    userId: '493689416',
    accessToken: '493689416.1677ed0.893f86da90114a09af513b0298bea0ab',
    resolution: 'standard_resolution',
    limit: '4',
    template: '<a href="{{link}}" target="_blank" class="grid--half"><img src="{{image}}" /></a>'

});
feed.run();