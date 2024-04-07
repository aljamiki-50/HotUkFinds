export default {
  // the name it  s the argument we pass for the type when making a query and the vision section
  name: "category",
  type: "document",
  // The title is the name appears at the studio folder
  title: "Category",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name Of category",
    },
    {
      name: "images",
      // we passed a type is array because we would embed many images for each products 3 and more
      type: "array",
      title: "Product Of Images",
      // and the of field here we telling sanity what kind of an arra
      //   y we using as we afore declared and here we explicty saying its images type array
      of: [{ type: "image" }],
    },
  ],
};
