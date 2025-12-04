export class Pokemon {
  public Id: number;
  public Nombre: string;
  public SpriteURL: string;
  public Tipos: string[];

  constructor(id: number, nombre: string, spriteUrl: string, tipos: string[]) {
    this.Id = id;
    this.Nombre = nombre;
    this.SpriteURL = spriteUrl;
    this.Tipos = tipos;
  }

  }
}
