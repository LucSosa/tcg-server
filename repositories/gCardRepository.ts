import { GCard } from "./model/gcard";

export class GCardRepository {
    data: GCard[] = [
        {
            id: '1teste',
            rarity: 'common',
            type: 'monster',
            color: ['blue', 'green'],
            image: 'url',
            spell: 'cancel',
            name: 'card test'
        }
    ];
    
    public getCard(id: string): GCard | undefined {
        return this.data.find(card => card.id === id);
    }

    public addCard(gcard: GCard): GCard | null{
        return null;
    }
}