var apos = require('apostrophe')({
  shortName: 'apostrophe-boilerplate',
  title: 'Apostrophe Boilerplate',
  afterListen: function(arg) {
    console.log('hello from afterListen');
    //console.log(arg);
  },
  // These are the modules we want to bring into the project.
  modules: {
    // This configures the apostrophe-users module to add an admin-level
    // group by default
    'apostrophe-users': {
      groups: [
        {
          title: 'guest',
          permissions: [ ]
        },
        {
          title: 'admin',
          permissions: [ 'admin' ]
        }
      ]
    },
    'apostrophe-express': {
      session: {
        secret: 'yoursecrethere'
      }
    },
    // This configures the apostrophe-assets module to push a 'site.less'
    // stylesheet by default
    'apostrophe-assets': {
      stylesheets: [
        {
          name: 'site'
        }
      ]
    },
    // Add your modules and their respective configuration here!
    'bbd-auth1': {}


  }

});
