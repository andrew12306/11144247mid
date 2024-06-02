var feed = new Instafeed({
    accessToken: '829e063ca03d955c033238d09fdd385c',
    limit: 6,
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    target: "instagram-feed",
    get: "user",
    userId: '67028696043', // 请替换为你的用户 ID
    resolution: 'standard_resolution'
});
feed.run();