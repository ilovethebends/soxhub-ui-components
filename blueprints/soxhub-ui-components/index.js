/* eslint-env node */
module.exports = {
  description: '',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall(options) {
  //   // Perform extra work here.
  // }

  afterInstall: function() {
     return this.addPackageToProject('ember-basic-dropdown');
  },
  normalizeEntityName: function(entityName){
    return entityName || "special-entity-name";
  }
};
