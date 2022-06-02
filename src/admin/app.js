export default {
  config: {
    // Add a new locale, other than 'en'
    locales: ["es"],
    /* translations: {
      es: {
        TRUE: "Si",
        FALSE: "No",
        // Customize the label of the Content Manager table.
      },
    }, */
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap(app) {
    console.log(app);
  },
};
