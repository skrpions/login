interface PokemonEssentials {
  name: string;
  image: string;
  attack: number;
  defense: number;
}
interface PokemonOptionals {
  id: string;
  hp: number;
  idAuthor: number;
  type: string;
}

export type PokemonProperties = Required<PokemonEssentials> & Partial<PokemonOptionals>;
export type PokemonUpdate = Partial<PokemonEssentials>;

export class PokemonEntity {
  public name!: string;
  public image!: string;
  public attack!: number;
  public defense!: number;
  private readonly id!: string;
  public hp!: number;
  public idAuthor!: number;
  public type!: string;


  constructor(properties: PokemonProperties) {
    Object.assign(this, properties);
  }

  properties(): PokemonProperties {
    return {
      name: this.name,
      image: this.image,
      attack: this.attack,
      defense: this.defense,
      id: this.id,
      hp: this.hp,
      idAuthor: this.idAuthor,
      type: this.type,

    };
  }

  update(properties: PokemonUpdate) {
    Object.assign(this, properties);
  }
}
