module.exports = {
    extend: 'apostrophe-pages',
    alias: 'bbd-auth1',
    //modulesReady: function(req, res){
        //console.log(req);

    //},
    construct: function(self, options) {
        console.log('=====================================');
console.log(self.apos.app);
        console.log(self.apos.tasks.getReq());
       // console.log(self);
        self.cookieName = self.options.cookieName || (self.apos.shortName + '.abc');
        self.pageNotFound = function(req, callback) {

            if (req.user) {
                return setImmediate(callback);
            }

            var bestSlugSoFar = (req.data.bestPage && req.data.bestPage.slug) || '/';

            var testReq = self.apos.tasks.getReq();
            testReq.data = {};
            testReq.params = [ req.slug ];
            console.log(testReq.params);
            /*
            return self.apos.pages.serveGetPage(testReq, function(err) {
                if (err) {
                    return callback(err);
                }
                var bestSlug =  (testReq.data.bestPage && testReq.data.bestPage.slug) || '/';
                if (bestSlug.length > bestSlugSoFar.length) {
                    req.res.cookie(self.cookieName, req.url);
                    return req.res.redirect('/login');
                }
                return callback(null);
            });
        */
        };


    }
};
