async function addCarWithOwners() {
    try {
    await mongoose.connect('mongodb+srv://test:mongo_db_test@cluster0.d2up4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  
      const newCar = new Car({
        make: "Ford",
        model: "Mustang",
        year: 2012,
        previousOwners: ["Alice Johnson", "Bob Smith", "Charlie Davis"] // At least 3 owners
      });
  
      await newCar.save();
      console.log("Car added successfully:", newCar);
  
      await mongoose.disconnect();
    } catch (error) {
      console.error('Error adding car:', error);
    }
  }
  
  addCarWithOwners();
  