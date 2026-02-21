// const fruits = ['Apple', 'Mango', 'Kiwi', 'Berry', 'banana', 'lichi'];

// Binding Pattern

// const [a, , , k] = fruits;
// console.log(a, k);

// const [a, m, ...[, be, ba]] = fruits;
// console.log(ba);

// function main() {
//   // Example usage:
//   const userProfile1 = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     city: 'New York',
//     street: '123 Main St',
//     zipCode: '10001',
//   };

//   const userProfile2 = {
//     name: 'Marry Jane',
//     email: 'marry.jane@example.com',
//     city: 'L.A',
//     street: '154 Washington Road',
//     zipCode: '10011',
//   };

//   function getUserInfo(profile, key) {
//     // Check if the key exists in the object
//     // write your code here
//     if (key in profile) {
//       return profile[key];
//     } else {
//       return 'Not available';
//     }
//   }

//   console.log(getUserInfo(userProfile1, 'name')); // Output: "John Doe"
//   console.log(getUserInfo(userProfile2, 'city')); // Output: "L.A"
//   console.log(getUserInfo(userProfile1, 'phoneNumber')); // Output: "Not available"

//   return getUserInfo;
// }

// main();

function main() {
  //Create your constructor funtion with the name Shipment
  function Shipment(id, location, destination, status, resources) {
    this.id = id;
    this.location = location;
    this.destination = destination;
    this.status = status;
    this.resources = resources || [];
  }
  //Add the updateStatusAndResources using the object prototype

  Shipment.prototype.updateStatusAndResources = function (
    newStatus,
    newResources
  ) {
    this.status = newStatus;
    this.resources = newResources;
    console.log(
      `Shipment ${this.id}: Status updated to '${this.status}'. Resources replaced.`
    );
  };

  //Add the assignResource methods through Object prototype
  Shipment.prototype.assignResources = function () {
    this.resources.push(...arguments);
    console.log(`Shipment ${this.id}: New resources assigned.`);
  };
  //Create the object literal with tthe name TrackingSystem
  const TrackingSystem = {
    shipments: [],

    updateStatus: function (id, status) {
      const shipment = this.shipments.find((s) => s.id === id);

      if (shipment) {
        shipment.status = status;
        console.log(
          `\nTrackingSystem: Shipment ${id} status successfully updated to '${status}'.`
        );
        return true;
      } else {
        console.log(
          `\nTrackingSystem: Error - Shipment with ID ${id} not found.`
        );
        return false;
      }
    },
    viewShipment: function (id) {
      const shipment = this.shipments.find((s) => s.id === id);

      if (shipment) {
        // Destructuring the necessary properties from the found shipment object
        const {
          id: shipmentID, // Rename id for output
          status: currentStatus, // Rename status for output
          resources,
          location: shipLocation, // Rename location for output
          destination: shipDestination, // Rename destination for output
        } = shipment;
        console.log(`\nShipment ID: ${shipmentID}`);
        console.log(`Status: ${currentStatus}`);
        // Join array elements for a cleaner display
        console.log(`Resources: ${resources.join(', ')}`);
        console.log(`Location: ${shipLocation}`);
        console.log(`Destination: ${shipDestination}`);
      } else {
        console.log(`\nTrackingSystem: Shipment with ID ${id} not found.`);
      }
    },
  };
  return { Shipment, TrackingSystem };
  //do not modify any other code.
}
