import { Observable } from "rxjs";
import { Clothes } from "../clothes";

export abstract class ClothesGateway {
  abstract getClothes():Observable<Clothes[]>
}
