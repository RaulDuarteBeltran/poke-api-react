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

  public static FromJson(pokeJson: any): Pokemon {
    const id = pokeJson["id"];
    const nombre = pokeJson["name"];
    const spriteUrl =
      pokeJson["sprites"]["other"]["official-artwork"]["front_default"];
    const tipos = pokeJson["types"].map((tipo: any) => tipo["type"]["name"]);
    return new Pokemon(id, nombre, spriteUrl, tipos);
  }
}
