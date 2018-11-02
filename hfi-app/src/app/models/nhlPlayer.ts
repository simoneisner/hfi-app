import { IPerson } from "./person";
import { IPosition } from "./position";

export interface INhlPlayer {
    person: IPerson;
    jerseyNumber: string;
    position: IPosition;
}
