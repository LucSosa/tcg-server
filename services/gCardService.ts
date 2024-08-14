import { GCardRepository } from "../repositories/gCardRepository";
import { GCard } from "../repositories/model/gcard";

export class GCardService {
    gCardRepository: GCardRepository = new GCardRepository;

    public addGCard(gcard: GCard): GCard | null{
        return this.gCardRepository.addCard(gcard);
    }

    public getGCard (id: string): GCard | undefined{
        return this.gCardRepository.getCard(id);
    }
}