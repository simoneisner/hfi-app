import { IType } from "./type";
import { ISplit } from "./split";

export interface IStat {
    type: IType;
    splits: ISplit[];
}
