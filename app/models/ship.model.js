module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: {
              type: String,
              required: true,
            },
            registry: {
                type: String,
                required: true,
              },
            classType: {
              type: String,
              required: true,
            },
            status: {
              type: String,
              required: false
            }
          },
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Ship = mongoose.model("ship", schema);
    return Ship;
  };
  