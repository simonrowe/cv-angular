export class Skill {

  constructor(public title: string, public skills: string[], public rating: number){

  }

  public getProgressColor(): string {
    if (this.rating > 90) {
      return 'success';
    } else if (this.rating >  85) {
      return 'info';
    } else {
      return 'warning';
    }
  }

}
