export enum EDirection {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

export const directionToText = (direction: EDirection) => {
  switch(direction) {
    case EDirection.NORTH: 
      return "NORTH";
    case EDirection.EAST: 
      return "EAST";
    case EDirection.SOUTH: 
      return "SOUTH";
    case EDirection.WEST: 
      return "WEST";
    default:
      throw Error("unexpected state");
  }
};

export const textToDirection = (direction: string) => {
  switch(direction) {
    case "NORTH":
      return EDirection.NORTH;
    case "EAST":
      return EDirection.EAST;
    case "SOUTH":
      return EDirection.SOUTH;
    case "WEST":
      return EDirection.WEST;
    default:
      throw Error("unexpected direction");
  }
};