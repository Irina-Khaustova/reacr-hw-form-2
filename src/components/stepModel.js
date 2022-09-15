import { nanoid } from "nanoid";

export default class StepModel {
  constructor(date, distance) {
    this.id = nanoid();
    this.date = date;
    this.distance = distance;
    this.time = StepModel.getTimestamp(date);
  }

  static getTimestamp(date) {
    console.log(date)
    const arrDate = date.split('.')
    const objDate = new Date(+`20${arrDate[2]}`, arrDate[1] - 1, +arrDate[0])
    return new Date(objDate).getTime()
  }
}