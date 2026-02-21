function trackFitness(exercise, duration) {
  //Implement your promise here
  return new Promise((resolve, reject) => {
    if (duration > 0) {
      setTimeout(() => {
        console.log(`Finished: ${exercise}`);
        resolve(duration);
      }, 5000);
    } else {
      reject("invalid duration.Please provide a positive number.");
    }
  });
}
trackFitness("Running", 30)
  .then((duration) => {
    console.log(`Total duration: ${duration} minutes.`);
  })
  .catch((error) => {
    console.log(`Failed to track fitness: ${error}`);
  });