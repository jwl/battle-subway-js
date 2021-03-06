import { GameState } from "../game/GameState";
import { PokemonTeam } from "../pokemon/PokemonTeam";
import { Action } from "../actions/Action";
import { BattleSystemAction } from "../battlesystem/BattleSystemAction";

export class TurnProcesser {
  private team1: PokemonTeam;
  private team2: PokemonTeam;
  private log: string[][];
  private turnLog: string[];
  private action1: Action;
  private action2: Action;
  private actionList: BattleSystemAction[];
  private static moveStartStatuses: string[] = ["Freeze", "Paralyze", "Sleep"];
  private static moveEndStatuses: string[] = ["Burn", "Poison"];

  constructor(gameState: GameState, action1: Action, action2: Action) {
    this.team1 = gameState.getTeam1();
    this.team2 = gameState.getTeam2();
    this.log = gameState.getLog();
    this.action1 = action1;
    this.action2 = action2;
    this.actionList = [];
    this.turnLog = [];
  }

  public returnResult(): GameState {
    this.queueActions();
    this.doActions();
    this.log.push(this.turnLog);

    return new GameState(this.team1, this.team2, this.log);
  }

  public queueActions(): void {
    // find out which action is first and push it onto action queue
    if (this.action1.getPriority() < this.action2.getPriority()) {
      this.createBSA(this.action1);
      this.createBSA(this.action2);
    } else if (this.action1.getPriority() > this.action2.getPriority()) {
      this.createBSA(this.action2);
      this.createBSA(this.action1);
    } else {
      // actions are tied for priority
    }
  }

  public createBSA(action: Action): void {
    //TODO
  }

  public doActions(): void {
    // TODO
  }

  private writeToTurnLog(actionLog: string[]): void {
    // TODO
  }
}
