import { DeckRepository } from "../repositories/deckRepository";
import { GCardRepository } from "../repositories/gCardRepository";

export class DeckService {
    private deckRepository: DeckRepository = new DeckRepository();

    public getUserDeck(userId: string) {
        return this.deckRepository.getUserDeck(userId);
    }
}