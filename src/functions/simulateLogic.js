export default function simulateLogic(
  people,
  offeredLocations,
  simulatedMovements,
  setSimulatedMovements
) {
  const possibleLocations = new Set();
  let candidates = [];
  let newSimulatedMovements = [];
  let everyoneHasLocation = false;
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

    console.log('candidates', candidates);
    console.log('locations', possibleLocations);

    for (let i = 0; i < candidates.length; i++) {
      let y = 0;
      while (
        !candidates.at(i).hasLocation &&
        y < candidates.at(i).options.length
      ) {
        if (possibleLocations.has(candidates.at(i).options[y].id)) {
          candidates.at(i).hasLocation = true;
          possibleLocations.delete(candidates.at(i).options[y].id);
          newSimulatedMovements.push({
            locationId: candidates.at(i).options[y].id,
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
          newSimulatedMovements = [];
          console.log(`removal`, candidates);
          break;
        }
      }
    }
  }
  console.log(newSimulatedMovements);
}
