export default function simulateLogic(
  people,
  offeredLocations,
  setSimulatedMovements
) {
  const possibleLocations = new Set();
  let candidates = [];
  let outOfOrderMovements = [];
  let everyoneHasLocation = false;
  const newSimulatedMovements = [];
  for (let i = 0; i < people.length; i++) {
    candidates.push({ ...people.at(i), hasLocation: false });
  }

  while (!everyoneHasLocation) {
    everyoneHasLocation = true;
    for (let i = 0; i < candidates.length; i++) {
      if (candidates.at(i).locationCascade)
        possibleLocations.add(candidates.at(i).location.id);
    }
    offeredLocations.forEach((location) => possibleLocations.add(location.id));

    for (let i = 0; i < candidates.length; i++) {
      let y = 0;
      while (
        !candidates.at(i).hasLocation &&
        y < candidates.at(i).options.length
      ) {
        if (possibleLocations.has(candidates.at(i).options[y].id)) {
          candidates.at(i).hasLocation = true;
          possibleLocations.delete(candidates.at(i).options[y].id);
          outOfOrderMovements.push({
            personId: candidates.at(i).id,
            name: candidates.at(i).name,
            from: candidates.at(i).location,
            to: candidates.at(i).options[y],
          });
        }
        y++;
      }
      if (!candidates.at(i).hasLocation) {
        if (possibleLocations.has(candidates.at(i).location.id)) {
          candidates.at(i).hasLocation = true;
          possibleLocations.delete(candidates.at(i).location.id);
        } else {
          everyoneHasLocation = false;
          let newCandidates = [];
          for (let candidate of candidates) {
            if (candidate.id !== candidates.at(i).id)
              newCandidates.push({ ...candidate, hasLocation: false });
          }
          candidates = newCandidates;
          outOfOrderMovements = [];
          console.log(`removal`, candidates);
          break;
        }
      }
    }
  }

  for (let i = 0; i < offeredLocations.length; i++) {
    let found = true;
    let toLocationId = offeredLocations.at(i).id;
    const locationThread = { initialLocationId: toLocationId, movements: [] };
    while (found) {
      let indexToRemove = -1;
      for (let y = 0; y < outOfOrderMovements.length; y++) {
        if (outOfOrderMovements.at(y).to.id === toLocationId) indexToRemove = y;
      }
      if (indexToRemove !== -1) {
        const [locationToAdd] = outOfOrderMovements.splice(indexToRemove, 1);
        toLocationId = locationToAdd.from.id;
        locationThread.movements.push(locationToAdd);
      } else {
        found = false;
      }
    }
    newSimulatedMovements.push(locationThread);
  }
  while (outOfOrderMovements.length > 0) {
    let found = true;
    let toLocationId = outOfOrderMovements.at(0).from.id;
    const locationThread = {
      initialLocationId: toLocationId + 10000,
      movements: [],
    };
    while (found) {
      let indexToRemove = -1;
      for (let y = 0; y < outOfOrderMovements.length; y++) {
        if (outOfOrderMovements.at(y).to.id === toLocationId) indexToRemove = y;
      }
      if (indexToRemove !== -1) {
        const [locationToAdd] = outOfOrderMovements.splice(indexToRemove, 1);
        toLocationId = locationToAdd.from.id;
        locationThread.movements.push(locationToAdd);
      } else {
        found = false;
      }
    }
    newSimulatedMovements.push(locationThread);
  }

  setSimulatedMovements(newSimulatedMovements);
}
