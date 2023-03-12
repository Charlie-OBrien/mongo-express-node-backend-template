module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            firstName: {
              type: String,
              required: true,
            },
            lastName: {
                type: String,
                required: true,
              },
            rank: {
              type: String,
              required: true,
            },
            position: {
              type: String,
              required: true,
            },
          },
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const People = mongoose.model("people", schema);
    return People;
  };
  